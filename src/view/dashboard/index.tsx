import StatisticCard from "../../components/statistic-card";
import {
    AcademicCapIcon,
    ArchiveBoxArrowDownIcon,
    FaceFrownIcon,
    HandThumbUpIcon,
    PresentationChartLineIcon,
    ShieldExclamationIcon,
    UserIcon,
    UsersIcon
} from "@heroicons/react/24/outline";
import {useEffect, useState} from "react";

export default function Dashboard() {

    const statisticList = [
        {
            id: 1,
            name: "Faol lidlar",
            icon: UserIcon,
            count: 345
        },
        {
            id: 2,
            name: "Faol talabalar",
            icon: AcademicCapIcon,
            count: 236
        },
        {
            id: 3,
            name: "Guruhlar",
            icon: UsersIcon,
            count: 186
        },
        {
            id: 4,
            name: "Qarzdorlar",
            icon: ShieldExclamationIcon,
            count: 155
        },
        {
            id: 5,
            name: "Sinov darsida",
            icon: PresentationChartLineIcon,
            count: 451
        },
        {
            id: 6,
            name: "Joriy oyda to'laganlar",
            icon: HandThumbUpIcon,
            count: 3
        },
        {
            id: 7,
            name: "Faol guruhni tark etganlar",
            icon: ArchiveBoxArrowDownIcon,
            count: 0
        },
        {
            id: 8,
            name: "Sinov muddatidan keyin ketdi",
            icon: FaceFrownIcon,
            count: 1
        }

    ]

    const [width, setWidth] = useState(0)

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll)
    }, [])

    const listenToScroll = () => {
        const winScroll = window.innerWidth
        setWidth(winScroll)
    }

    return (
        <div className={"flex gap-2 w-full"}>
            <div className="flex justify-between items-center w-full gap-2">
                {statisticList.slice(0, width < 1000 ? 4 : 5).map(({name, icon, count}, key) =>
                    <StatisticCard text={name} icon={icon} key={key} count={count}/>
                )}
            </div>
        </div>
    );
}