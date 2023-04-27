import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/hooks';

export interface AuthProps {
    children: any;
}

export function Auth({ children }: AuthProps) {
    const router = useRouter();
    const { profile, loading, error } = useAuth();

    useEffect(() => {
        if (!loading && profile === undefined) {
            router.push('/login');
        }
    }, [router, profile, loading]);

    if (!profile) {
        return <p></p>;
    }
    return <div>{children}</div>;
}
