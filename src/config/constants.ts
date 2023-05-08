import Dashboard from "../view/dashboard";
import Students from "../view/students";
import Teachers from "../view/teachers";
import Courses from "../view/courses";
import Groups from "../view/groups";
import Lids from "../view/lids";
import Settings from "../view/settings";
import GroupIn from "../view/groups/child-page/group-in";
import StudentIn from "../view/students/child-page/student-in";

const groupRoutes = [
    {
        id: 51,
        name: "group-in",
        path: "/groups/in",
        component: GroupIn
    }
]

const studentRoutes = [
    {
        id: 51,
        name: "group-in",
        path: "/students/in",
        component: StudentIn
    }
]
export const routes = [
    {
        id: 1,
        name: 'dashboard',
        path: '/dashboard',
        component: Dashboard
    },
    {
        id: 2,
        name: 'students',
        path: '/students',
        component: Students
    },
    ...studentRoutes,
    {
        id: 3,
        name: 'teachers',
        path: '/teachers',
        component: Teachers
    },
    {
        id: 4,
        name: 'courses',
        path: '/courses',
        component: Courses
    },
    {
        id: 5,
        name: 'groups',
        path: '/groups',
        component: Groups
    },
    ...groupRoutes,
    {
        id: 6,
        name: 'lids',
        path: '/lids',
        component: Lids
    },
    {
        id: 7,
        name: 'settings',
        path: '/settings',
        component: Settings
    },
]



export default function toggleFullScreen() {
    const doc = window.document;
    const docEl = doc.documentElement;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
        requestFullScreen.call(docEl);
    }
    else {
        cancelFullScreen.call(doc);
    }
}