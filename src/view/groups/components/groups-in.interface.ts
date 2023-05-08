import {studentProps} from "../../../interface/redux/variable.interface";

export interface StudentsTableProps {
    students: studentProps[] | undefined
}

export interface ProfileMenuProps {
    name: string;
    phone: string;
    balance: string
}