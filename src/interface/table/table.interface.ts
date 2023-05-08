import {ReactNode} from "react";
import {TableColumn} from "react-data-table-component";

export interface TableInterfaceProps {
    data: any;
    columns: TableColumn<unknown>[];
    totalPages: number;
    totalCount: number;
    currentPage: number;
    size: number;
    ref?: ReactNode

}