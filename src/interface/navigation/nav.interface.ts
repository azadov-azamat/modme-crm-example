export interface CabinetNavigationProps {
    id: number,
    title: string;
    icon: any;
    navLink?: string;
    nav?: CabinetNavigationProps[]
}