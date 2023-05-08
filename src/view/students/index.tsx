import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";

export default function Students() {

    const {students} = useSelector((state: RootState) => state.variables)

    console.log(students)

    return (
        <div>
            Students
        </div>
    );
}