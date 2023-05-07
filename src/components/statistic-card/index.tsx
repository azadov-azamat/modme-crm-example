import CountUp from "react-countup"
import {createElement} from "react";
import {Typography} from "@material-tailwind/react";

interface StatisticCardProps {
    icon: any;
    text: string;
    count: number;
}

export default function StatisticCard({icon, text, count}: StatisticCardProps) {
    return (
        <div key={text} className={"flex flex-col gap-2 justify-between items-center p-4 bg-white shadow-xl w-full h-36 "}>
            <div className="statistic-card-name flex flex-col justify-center items-center text-center">
                {createElement(icon, {
                    className: `w-10`,
                    strokeWidth: 1,
                })}
                <Typography
                    as="span"
                    variant="normal"
                    className="text-xs"
                    color={"inherit"}
                >
                    {text}
                </Typography>
            </div>
            <div className="statistic-card-number">
                <Typography
                    as="h2"
                    className="text-xl"
                    color={"inherit"}
                >
                    <CountUp duration={2.75} end={count}/>
                </Typography>
            </div>
        </div>
    );
}