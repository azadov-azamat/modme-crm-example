import {useSelector} from "react-redux";
import {Card} from "@material-tailwind/react";
import {RootState} from "../../../redux/store";
import {employeesProps} from "../../../interface/redux/variable.interface";
import PageTitle from "../../../components/page-title";
import TableComponent from "../../../components/table";
import {ModalInterfaceProps} from "../../../interface/modal/modal.interface";
import {TrashIcon} from "@heroicons/react/24/outline";

export default function Employees({toggle}: ModalInterfaceProps) {

    // const query = qs.parse(location.search, {ignoreQueryPrefix: true})
    const {employees} = useSelector((state: RootState) => state.variables)

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
        },
        {
            name: "role",
            width: '150px',
            wrap: true,
            selector: (row: employeesProps) => row.role.name
        },
        {
            name: "Tug'ilgan kuni",
            width: '150px',
            wrap: true,
            selector: (row: employeesProps) => row.birthdate
        },
        {
            name: "Amallar",
            width: '150px',
            wrap: true,
            cell: (row: employeesProps) => <>
                <TrashIcon color={'red'} className={"cursor-pointer"} width={25} onClick={() => console.log(row.id)}/>
            </>
        }
    ]

    const total_count = 234;
    const current_page = 1;
    const count_item = 20

    return (
        <div className={"flex flex-col p-3 gap-3"}>
            <PageTitle title={"Xodimlar"} toggle={toggle} isNew={true}/>
            <Card className={"p-2"}>
                <TableComponent data={employees}
                                columns={basicColumns}
                                totalPages={Math.ceil(total_count / 15)}
                                currentPage={current_page}
                                size={count_item}
                                totalCount={total_count}
                />
            </Card>
        </div>
    );
}