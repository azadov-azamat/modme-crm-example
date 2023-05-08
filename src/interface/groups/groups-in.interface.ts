import {studentProps} from "../redux/variable.interface";

export interface StudentsTableProps {
    students: studentProps[] | undefined
}

export interface ProfileMenuProps {
    name: string;
    phone: string;
    balance: string
}