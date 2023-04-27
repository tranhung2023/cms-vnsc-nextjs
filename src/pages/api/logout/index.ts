// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import Cookies from 'cookies';

type Data = {
    message: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const cookies = new Cookies(req, res);

    cookies.set('access_token');

    res.status(200).json({ message: 'Logout successfully' });
}
