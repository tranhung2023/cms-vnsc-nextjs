import React, { useState, useEffect } from 'react';
import { getEkycProcessing } from '@/api-client';
import classNames from 'classnames/bind';
import styles from './Styles.module.scss';
import Link from 'next/link';
import { Button } from 'reactstrap';
import { AppDispatch, RootState } from '@/store/store';
import { useSelector, useDispatch } from 'react-redux';
import { setDataEkyc, setPageEkyc } from '@/slices/ekycSlice';
import Pagination from 'rc-pagination';
import localeInfo from '@/utils/vi_VN';
import Router from 'next/router';
import { reFormatTimeString } from '@/utils';

const cx = classNames.bind(styles);

export interface IEkycPageProps {}

export default function EkycPage(props: IEkycPageProps) {
    // const [data, setData] = useState<ekycItem[]>();

    const { dataEkyc, currentPage, pageSize, totalElements } = useSelector(
        (state: RootState) => state.ekyc,
    );

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        getEkycProcessing(currentPage, pageSize).then((res) => {
            dispatch(
                setDataEkyc({
                    dataEkyc: res.content,
                    totalElements: res.totalElements,
                    totalPages: res.totalPages,
                }),
            );
        });
    }, [currentPage]);

    const onChangePage = (page: number) => {
        dispatch(setPageEkyc(page));
        //
        const pathname = Router.pathname;
        let query = Router.query;
        query['page'] = String(page);
        const url = {
            pathname: pathname,
            query: query,
        };
        Router.push(url);
    };

    return (
        <div className={cx('wrapper')}>
            <div className="head-page">
                <h2 className="title">Danh sách eKyc cần xử lý</h2>
                <div className="btn-create">
                    {/* <Link href={`/category/create`}>
                        <Button size="sm" color="primary">
                            Create
                        </Button>
                    </Link> */}
                </div>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>UID</th>
                        <th>Mã số lưu ký</th>
                        <th>Tên</th>
                        <th>Ngày tạo</th>
                        <th>Trạng thái</th>
                        <th>Người xử lý</th>
                        <th>Ngày xử lý</th>
                        <th
                            style={{
                                width: '200px',
                            }}
                        ></th>
                    </tr>
                </thead>
                <tbody>
                    {dataEkyc &&
                        dataEkyc.map((item, index) => {
                            return (
                                <tr key={item.user_id}>
                                    <td>{pageSize * (currentPage - 1) + index + 1}</td>
                                    <td>{item.user_id}</td>
                                    <td>{item.depository_number}</td>
                                    <td>{item.full_name}</td>
                                    <td>{reFormatTimeString(item.created_at)}</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <div className="wrap-action">
                                            <Link
                                                href={`/e-kyc/detail/${item.user_id}`}
                                                className="btn-update"
                                            >
                                                <Button size="sm" color="primary" outline>
                                                    Detail
                                                </Button>
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
            <Pagination
                className="pagination-global"
                onChange={onChangePage}
                current={currentPage}
                total={totalElements}
                locale={localeInfo}
                pageSize={pageSize}
            />
        </div>
    );
}
