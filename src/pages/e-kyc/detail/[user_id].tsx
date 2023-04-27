import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './Styles.module.scss';
import { useRouter } from 'next/router';
import { AppDispatch, RootState } from '@/store/store';
import { useSelector, useDispatch } from 'react-redux';

const cx = classNames.bind(styles);

export interface IEkycDetailPageProps {}

export default function EkycDetailPage(props: IEkycDetailPageProps) {
    const router = useRouter();
    const user_id = router.query.user_id;
    console.log(user_id);
    return (
        <div className={cx('wrapper')}>
            <div className="head-page">
                <h2 className="title">Chi tiết khách hàng: Trần Mạnh Hưng</h2>
                <div className="btn-create">
                    {/* <Link href={`/category/create`}>
                        <Button size="sm" color="primary">
                            Create
                        </Button>
                    </Link> */}
                </div>
            </div>
            <div className={cx('item')}>
                <div className={cx('label')}>UID khách hàng</div>
                <div className={cx('text')}>1250</div>
            </div>
            <div className={cx('item')}>
                <div className={cx('label')}>Mã số lưu ký</div>
                <div className={cx('text')}>120C989898</div>
            </div>
            <div className={cx('item')}>
                <div className={cx('label')}>Tên khách hàng</div>
                <div className={cx('text')}>Trần Mạnh Hưng</div>
            </div>
            <div className={cx('item')}>
                <div className={cx('label')}>Phone</div>
                <div className={cx('text')}>0988999777</div>
            </div>
            <div className={cx('item')}>
                <div className={cx('label')}>Email</div>
                <div className={cx('text')}>test@gmail.com.vn</div>
            </div>
            <div className={cx('item')}>
                <div className={cx('label')}>Giới tính</div>
                <div className={cx('text')}></div>
            </div>
            <div className={cx('item')}>
                <div className={cx('label')}>Địa chỉ</div>
                <div className={cx('text')}></div>
            </div>
            <div className={cx('item')}>
                <div className={cx('label')}>Chức vụ</div>
                <div className={cx('text')}></div>
            </div>
            <div className={cx('item')}>
                <div className={cx('label')}>Vị trí</div>
                <div className={cx('text')}></div>
            </div>
            <div className={cx('item')}>
                <div className={cx('label')}>Loại giấy tờ</div>
                <div className={cx('text')}>CCCD</div>
            </div>
            <div className={cx('item')}>
                <div className={cx('label')}>Ngày cấp</div>
                <div className={cx('text')}>22/12/2020</div>
            </div>
            <div className={cx('item')}>
                <div className={cx('label')}>Ngày hết hạn</div>
                <div className={cx('text')}>22/12/2020</div>
            </div>
            <div className={cx('item')}>
                <div className={cx('label')}>Trạng thái</div>
                <div className={cx('text')}></div>
            </div>
            <div className={cx('item')}>
                <div className={cx('label')}>Username CS thực hiện xử lý</div>
                <div className={cx('text')}></div>
            </div>
            <div className={cx('item')}>
                <div className={cx('label')}>Ngày tạo ekyc</div>
                <div className={cx('text')}></div>
            </div>
            <div className={cx('item')}>
                <div className={cx('label')}>Ngày xử lý</div>
                <div className={cx('text')}></div>
            </div>
        </div>
    );
}
