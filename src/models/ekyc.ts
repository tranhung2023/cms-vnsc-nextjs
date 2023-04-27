export interface pageAble {
    sort: any;
    offset: number;
    pageNumber: number;
    pageSize: number;
    unpaged: boolean;
    paged: boolean;
}

export interface ekycItem {
    user_id: number;
    full_name: string;
    identity_number: string;
    id_issue_date: string;
    expired_date: string;
    id_issue_address: string;
    identity_type: string;
    job_title: string;
    bank_account_name: string;
    bank_account_number: string;
    bank_name: string;
    bank_location: string;
    bank_branch: string;
    depository_number: string;
    image_token: string;
    dob: string;
    gender: string;
    address: string;
    district: string;
    ward: string;
    job: string;
    city: string;
    created_at: string;
}

export interface ekycProcessing {
    content: ekycItem[];
    pageable: pageAble;
    totalPages: number;
    totalElements: number;
    last: boolean;
    size: number;
    number: number;
    sort: any;
    numberOfElements: number;
    first: boolean;
    empty: boolean;
}
