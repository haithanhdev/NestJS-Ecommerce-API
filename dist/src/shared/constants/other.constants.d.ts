export declare const UPLOAD_DIR: string;
export declare const ALL_LANGUAGE_CODE = "all";
export declare const OrderBy: {
    readonly Asc: "asc";
    readonly Desc: "desc";
};
export declare const SortBy: {
    readonly Price: "price";
    readonly CreatedAt: "createdAt";
    readonly Sale: "sale";
};
export declare const PREFIX_PAYMENT_CODE = "DH";
export type OrderByType = (typeof OrderBy)[keyof typeof OrderBy];
export type SortByType = (typeof SortBy)[keyof typeof SortBy];
