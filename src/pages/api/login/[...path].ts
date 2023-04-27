// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { createProxyMiddleware } from 'http-proxy-middleware';
import Cookies from 'cookies';

export const config = {
    api: {
        bodyParser: false,
    },
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    return new Promise((resolve, reject) => {
        const proxy: any = createProxyMiddleware({
            target: `${process.env.VNSC_ADMIN_SERVICE}`,
            changeOrigin: true,
            secure: false,
            pathRewrite: { '^/api/login': '' },
            selfHandleResponse: true,
            onProxyRes: function (proxyRes, req, res) {
                proxyRes.on('data', function (chunk) {
                    handleResponseData(chunk);
                });
                proxyRes.on('end', handleResponseEnd);
            },
        });
        let body = '';
        const handleResponseData = (chunk: any) => {
            body += chunk;
        };

        const handleResponseEnd = () => {
            try {
                const { error_code, message, data } = JSON.parse(body);
                if (error_code === '0' && message === 'Success' && data) {
                    // convert token to cookies
                    const cookies = new Cookies(req, res);
                    var now = new Date(); // Now
                    var expire = new Date();
                    expire.setFullYear(now.getFullYear());
                    expire.setMonth(now.getMonth());
                    expire.setDate(now.getDate() + 1);
                    expire.setHours(0);
                    expire.setMinutes(0);
                    expire.setSeconds(0);

                    cookies.set('access_token', data, {
                        httpOnly: true,
                        sameSite: 'strict',
                        expires: expire,
                    });
                    (res as NextApiResponse).status(200).json({
                        message: 'Login successfully',
                    });
                } else {
                    (res as NextApiResponse).status(200).json({ message: message });
                }
            } catch (error) {
                (res as NextApiResponse).status(500).json({ message: 'Something went wrong' });
            }
            resolve(true);
        };

        proxy(req, res, (err: any) => {
            if (err) {
                throw err;
            }
            throw new Error(`Request '${req.url}' is not proxied! We should never reach here!`);
        });
    });
}
