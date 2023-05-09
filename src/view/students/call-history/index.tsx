import {StudentInterfaceProps} from "../../../interface/student/student.interface";
import TableComponent from "../../../components/table";

export default function CallHistoryComponent({student}: StudentInterfaceProps) {

    console.log(student)

    const basicColumns: any = [
        {
            name: "Natija",
            width: '150px',
            wrap: true
        },
        {
            name: "Miqdor",
            width: 'DAvomiyligi',
            wrap: true
        },
        {
            name: "Vaqti",
            width: '150px',
            wrap: true
        }
    ]

    const total_count = 234;
    const current_page = 1;
    const count_item = 20

    return (
        <div className="w-full bg-white shadow-lg p-3">
            <TableComponent data={[]}
                            columns={basicColumns}
                            totalPages={Math.ceil(total_count / 15)}
                            currentPage={current_page}
                            size={count_item}
                            totalCount={total_count}
            />
        </div>
    );
}