import {lanesDataProps, leadDataProps} from "../leads/leads.interface.ts";

export interface InitialStateProps {
    lang: string;
    loading: boolean;
    courses: coursesProps[],
    groups: groupsProps[],
    students: studentProps[],
    studentGroup: groupsProps | null,
    employees: employeesProps[],
    roles: systemRoleProps[],
    rooms: roomsProps[],
    smsTemplates: smsTemplateProps[],
    autoSms: autoSmsProps[],
    lanesData: lanesDataProps[],
    leadData: leadDataProps[],
    attendance: AttendanceDataProps[]
}

export interface coursesProps {
    id: number;
    name: string;
    price: string;
    type: string;
    parentId?: string;
}

export interface groupsProps {
    id: string;
    name: string;
    teacher: employeesProps;
    time: string;
    status: boolean;
    days: string;
    price: string;
    room: roomsProps;
    startTime: string;
    startDate: string;
    finalDate: string;
}

export interface studentProps {
    id: number;
    name: string;
    phone: string;
    groupId: string;
    balance: string;
    gender: boolean;
}

export interface employeesProps {
    id: number;
    name: string;
    phone: string;
    password: string;
    role: systemRoleProps;
    birthdate: string;
    gender: boolean;

}

export interface systemRoleProps {
    id: number;
    name: string;
}

export interface roomsProps {
    id: number,
    name: string;
}

export interface smsTemplateProps {
    id: number;
    text: string;
}

export interface autoSmsProps extends smsTemplateProps {
    title: string;
    isSend: boolean;
    desc: string;
}

export interface AttDaysProps {
    day: number,
    isAtt: boolean;
}

export interface AttendanceDataProps {
    id: number;
    studentId: number;
    groupId: string;
    attDays: AttDaysProps[]
}