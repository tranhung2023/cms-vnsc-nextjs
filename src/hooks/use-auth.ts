import useSWR from 'swr';
import { authApi } from '@/api-client';

export function useAuth() {
    const {
        data: profile,
        error,
        mutate,
    } = useSWR<any>('profile', authApi.getProfile, {
        dedupingInterval: 60 * 60 * 1000, // 1hr
        revalidateOnFocus: false,
        onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
            // Never retry on 404.
            if (error.status === 404) return;
            // Never retry on 401.
            if (error.status === 401) return;
        },
    });

    const loading = profile === undefined && error === undefined;

    async function login() {}
    async function logout() {
        await authApi.logout();
        mutate(undefined);
    }

    return { profile, loading, error, mutate, login, logout };
}
