import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {employeesProps} from "../../interface/redux/variable.interface";
import TableComponent from "../../components/table";
import PageTitle from "../../components/page-title";
import {useState} from "react";
import NewStudentAddComponent from "../settings/employees/new-add";
import {Card} from "@material-tailwind/react";

export default function Teachers() {

    // const query = qs.parse(location.search, {ignoreQueryPrefix: true})
    const {employees} = useSelector((state: RootState) => state.variables)

    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open)

    const basicColumns: any = [
        {
            name: "Id",
            width: '50px',
            wrap: true,
            selector: (row: employeesProps) => row.id
        },
        {
            name: 'Nomi',
            width: '200px',
            wrap: true,
            selector: (row: employeesProps) => row.name
        },
        {
            name: "Phone",
            width: '150px',
            wrap: true,
            selector: (row: employeesProps) => row.phone
        }
    ]

    const total_count = 234;
    const current_page = 1;
    const count_item = 20

    return (
        <div className={"flex flex-col p-3 gap-3"}>
            <PageTitle title={"O'qituvchilar"} toggle={toggle} isNew={true}/>
            <Card className={"p-2"}>
                <TableComponent data={employees.filter(e => e.role.id === 5)}
                                columns={basicColumns}
                                totalPages={Math.ceil(total_count / 15)}
                                currentPage={current_page}
                                size={count_item}
                                totalCount={total_count}
                />
            </Card>
            <NewStudentAddComponent open={open} toggle={toggle}/>
        </div>
    );
}