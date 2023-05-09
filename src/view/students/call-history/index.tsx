import {StudentInterfaceProps} from "../../../interface/student/student.interface";

export default function CallHistoryComponent({student}: StudentInterfaceProps) {

    console.log(student)

    return (
        <div>
            Call history
        </div>
    );
}