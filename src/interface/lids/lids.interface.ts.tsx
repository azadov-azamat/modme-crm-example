export interface lanesDataProps {
    title: string;
    value: string;
    items?: leadDataProps[];
}

export interface leadDataProps {
    name: string;
    value: string;
    phone: string;
    text: string;
}

export interface editLeadDataProps {
    container: string;
    phone: string;
    parent: string;
}