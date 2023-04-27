import { LoginPayload } from '@/models';
import axios from 'axios';

export const authApi = {
    login(payload: LoginPayload) {
        return axios
            .post('/api/login/auth', payload, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((res) => {
                return res.data;
            });
    },
    logout() {
        return axios.post('/api/logout');
    },
    getProfile() {
        return axios.get('/api/profile/profile').then((res) => {
            return res.data;
        });
    },
};
