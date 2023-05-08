import {mockCourse} from "../../mock/data";
import CourseCard from "../../components/card/course";
import {Button, Typography} from "@material-tailwind/react";
import {useState} from "react";
import NewAddComponent from "./new-add";

export default function Courses() {

    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open)

    return (
        <div className={"flex flex-col p-3 gap-3"}>
            <div className="w-full p-3 h-auto flex justify-between items-center border-b-2 border-white">
                <Typography
                    variant="h4"
                >
                    Kurslar
                </Typography>
                <Button onClick={toggle}>Yangisini qo'shish</Button>
            </div>

            <div className="flex flex-wrap justify-between items-center gap-4">
                {mockCourse.map(({name, price}, key) => {
                    return (<CourseCard sum={price} title={name} key={key}/>)
                })}
            </div>
            <NewAddComponent open={open} toggle={toggle}/>
        </div>
    );
}