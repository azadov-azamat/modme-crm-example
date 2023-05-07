import {
    AcademicCapIcon,
    ArrowDownTrayIcon,
    Cog6ToothIcon,
    ComputerDesktopIcon,
    HomeIcon,
    UserGroupIcon,
    UsersIcon
} from "@heroicons/react/24/outline";
import {CabinetNavigationProps} from "../interface/navigation/nav.interface";

export const CabinetNavigation: CabinetNavigationProps[] = [
    {
        id: 1,
        title: 'Bosh sahifa',
        icon: HomeIcon,
        navLink: '/dashboard'
    },
    {
        id: 2,
        title: 'Talabalar',
        icon: AcademicCapIcon,
        navLink: '/students'
    },
    {
        id: 3,
        title: "O'qituvchilar",
        icon: UsersIcon,
        navLink: '/teachers'
    },
    {
        id: 4,
        title: "Kurslar",
        icon: ComputerDesktopIcon,
        navLink: '/courses'
    },
    {
        id: 5,
        title: "Guruhlar",
        icon: UserGroupIcon,
        navLink: '/groups'
    },
    {
        id: 6,
        title: 'Lidlar',
        icon: ArrowDownTrayIcon,
        navLink: '/lids'
    },
    {
        id: 7,
        title: 'Sozlamalar',
        icon: Cog6ToothIcon,
        navLink: '/settings'
    }
]