import {UniqueIdentifier} from "@dnd-kit/core";

export interface lanesDataProps {
    title: string;
    value: string;
    items?: leadDataProps[];
}

export interface leadDataProps {
    name: string;
    value:  string | number;
    phone: string;
    text: string;
}

export interface editLeadDataProps {
    container: UniqueIdentifier | undefined;
    phone: string;
    parent: string;
}