import imgBook from "../../../assets/books.png"
import {Typography} from "@material-tailwind/react";

interface CourseCardProps {
    title: string;
    sum: string;
}

export default function CourseCard({sum, title}: CourseCardProps): JSX.Element {

    const color = ['bg-amber-700', 'bg-green-300', 'bg-green-600', 'bg-teal-700', 'bg-sky-600', 'bg-violet-900', 'bg-rose-700']

    return (
        <div className={'shadow-lg w-64 h-72 border rounded-lg cursor-pointer'}>
            <div
                className={`image w-full h-2/3 rounded-t-lg flex justify-center items-center ${color[Math.floor(Math.random() * 7)]}`}>
                <img src={imgBook} alt="" width={150}/>
            </div>
            <div className="p-3">
                <Typography
                    as="h4"
                    variant="small"
                    className="font-bold"
                    color={"inherit"}
                >
                    {title}
                </Typography>
                <Typography
                    as="span"
                    variant="small"
                    className="font-normal"
                    color={"inherit"}
                >
                    {sum} UZS
                </Typography>
            </div>
        </div>
    );
}