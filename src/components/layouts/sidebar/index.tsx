import React from 'react';
import classnames from 'classnames/bind';
import styles from './Styles.module.scss';
import Link from 'next/link';
import { VscUnverified, VscVerifiedFilled } from 'react-icons/vsc';

const cx = classnames.bind(styles);

export interface SidebarProps {}

export default function Sidebar(props: SidebarProps) {
    return (
        <div className={cx('wrapper')}>
            <Link href="/e-kyc">
                <div className={cx('item')}>
                    <div className={cx('icon')}>
                        <VscVerifiedFilled />
                    </div>
                    <div className={cx('text')}>EKYC cần xử lý</div>
                </div>
            </Link>
        </div>
    );
}
