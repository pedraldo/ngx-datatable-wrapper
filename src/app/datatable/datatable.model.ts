import { ColumnMode } from '@swimlane/ngx-datatable';

export interface TableOptions {
    columnMode?: ColumnMode;
    headerHeight?: number;
    footerHeight?: number;
    rowHeight?: string;
}

export interface FilterOptions {
    width?: string;
}

export interface PaginationOptions {
    limit?: number;
}
