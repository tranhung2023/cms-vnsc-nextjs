import React from 'react';
import classnames from 'classnames/bind';
import styles from './Styles.module.scss';
import { LayoutProps } from '@/models';
import Sidebar from '@/components/layouts/sidebar';
import Link from 'next/link';
import { Auth } from '@/components/common';
import { useAuth } from '@/hooks';
import { useRouter } from 'next/router';

const cx = classnames.bind(styles);

export interface DefaultLayoutProps {}

export function DefaultLayout({ children }: LayoutProps) {
    const router = useRouter();

    const { profile, logout, error } = useAuth();

    const handleLogout = async () => {
        await logout();
    };

    return (
        <Auth>
            <div className={cx('wrapper')}>
                <div className={cx('sidebar')}>
                    <Link href="/">
                        <h1>Admin</h1>
                    </Link>
                    <Sidebar />
                </div>
                <div className={cx('container')}>
                    <div className={cx('top-nav')}>
                        <span className={cx('full-name')}>{profile && profile.data.fullName}</span>
                        <button onClick={handleLogout} className="btn btn-primary btn-sm">
                            Logout
                        </button>
                    </div>
                    <div className={cx('content')}>{children}</div>
                </div>
            </div>
        </Auth>
    );
}
