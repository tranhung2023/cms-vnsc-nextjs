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
    if (req.url === undefined) {
        return res.status(500).json({ name: 'Something went wrong' });
    }

    const cookies = new Cookies(req, res);
    const accessToken = cookies.get('access_token');
    if (accessToken) {
        req.headers.authorization = `Bearer ${accessToken}`;
    }

    return new Promise((resolve, reject) => {
        const proxy: any = createProxyMiddleware({
            target: `${process.env.VNSC_ADMIN_SERVICE}`,
            changeOrigin: true,
            secure: false,
            pathRewrite: { '^/api/profile': '/' },
            onProxyRes: function (proxyRes, req, res) {
                proxyRes.on('end', handleResponseEnd);
            },
        });

        const handleResponseEnd = () => {
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
