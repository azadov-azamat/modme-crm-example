export interface InitialStateProps {
    lang: string;
    loading: boolean;
    groups: groupsProps[],
    students: studentProps[],
    studentGroup: groupsProps | null
}

export interface coursesProps {
    id: number;
    name: string;
    price: string;
    child?: coursesProps[] | null;
}

export interface groupsProps {
    id: string;
    name: string;
    teacher: string;
    time: string;
    status: boolean;
    days: string;
    price: string;
    room: string;
    startTime: string;
    startDate: string;
    finalDate: string
    students: studentProps[]
}

export interface studentProps {
    id: number | undefined;
    name: string;
    phone: string;
    groupId: string;
    balance: string;
}