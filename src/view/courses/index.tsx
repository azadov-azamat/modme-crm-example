import CourseCard from "../../components/card/course";
import {useState} from "react";
import NewCourseAddComponent from "./new-add";
import PageTitle from "../../components/page-title";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";

export default function Courses() {

    const {courses} = useSelector((state: RootState) => state.variables)
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open)

    return (
        <div className={"flex flex-col p-3 gap-3"}>
            <PageTitle title={"Kurslar"} toggle={toggle} isNew={true}/>

            <div className="flex flex-wrap justify-between items-center gap-4">
                {courses.map(({name, price}, key) => {
                    return (<CourseCard sum={price} title={name} key={key}/>)
                })}
            </div>
            <NewCourseAddComponent open={open} toggle={toggle}/>
        </div>
    );
}