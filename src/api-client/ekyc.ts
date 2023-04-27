import axios from 'axios';
import { ekycProcessing } from '@/models';

/**
 * Lấy danh sách eKyc cần xử lý
 * @param page
 * @param size
 * @param keyword
 * @returns
 */
export const getEkycProcessing = (page: number, size: number, keyword?: string) => {
    return new Promise<ekycProcessing>((resolve, reject) => {
        axios
            .get('/api/e-kyc/processing', {
                params: {
                    page: page,
                    size: size,
                },
            })
            .then((response) => {
                return response.data;
            })
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(err.message);
            });
    });
};
