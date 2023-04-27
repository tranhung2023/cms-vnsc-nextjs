import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Styles.module.scss';
import { EmptyLayout } from '@/components/layouts';
import { useRouter } from 'next/router';
import { authApi } from '@/api-client';
import { useAuth } from '@/hooks';
import logoVnscByFinhay from 'public/logo_vnsc_by_finhay.svg';
import Image from 'next/image';

const cx = classNames.bind(styles);

export interface LoginProps {}

export default function Login(props: LoginProps) {
    const router = useRouter();
    const { profile, mutate, loading, error } = useAuth();

    useEffect(() => {
        function redirectAfterLogin() {
            if (!loading && profile) {
                router.push('/');
            }
        }
        redirectAfterLogin();
    }, [profile, loading]);

    const [state, setState] = useState({
        username: '',
        password: '',
    });

    const [errorMsg, setErrorMsg] = useState('');

    const { username, password } = state;

    const handleChange = (e: any) => {
        let { name, value } = e.target;
        // check phone input
        setState({
            ...state,
            [name]: value,
        });
    };

    const handleLoginClick = async () => {
        try {
            const data = await authApi.login({
                username: username,
                password: password,
            });
            mutate();
            if (data.message === 'Login successfully') {
                router.push('/');
            } else {
                setErrorMsg(data.message);
            }
        } catch (err) {
            console.log('Failed to login', err);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('content')}>
                    <div className={cx('logo')}>
                        <Image
                            src={logoVnscByFinhay}
                            width={75}
                            height={32}
                            alt="VNSC By Finhay"
                            priority={true}
                        />
                        <h1>Đăng nhập</h1>
                    </div>
                    <div className={cx('wrap-info')}>
                        <input
                            onChange={handleChange}
                            name="username"
                            type="text"
                            placeholder="username"
                            className={cx('username')}
                        />
                        <input
                            onChange={handleChange}
                            name="password"
                            type="password"
                            placeholder="password"
                            className={cx('password')}
                        />
                        {errorMsg ? <p style={{ color: 'red' }}>{errorMsg}</p> : null}
                        <button onClick={handleLoginClick}>Tiếp tục</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

Login.Layout = EmptyLayout;
