import {PencilIcon} from "@heroicons/react/24/solid";
import {useSelector} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
import {RootState} from "../../redux/store";
import {studentProps} from "../../interface/redux/variable.interface";
import TableComponent from "../../components/table";
import PageTitle from "../../components/page-title";
import {useState} from "react";
import NewStudentAddComponent from "./new-add";
import {Card} from "@material-tailwind/react";

export default function Students() {

    const navigate = useNavigate()
    const location = useLocation()
    // const query = qs.parse(location.search, {ignoreQueryPrefix: true})
    const {students} = useSelector((state: RootState) => state.variables)

    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open)


    const basicColumns: any = [
        {
            name: "Id",
            width: '50px',
            wrap: true,
            selector: (row: studentProps) => row.id
        },
        {
            name: 'Nomi',
            width: '120px',
            wrap: true,
            selector: (row: studentProps) => row.name
        },
        {
            name: "Phone",
            width: '150px',
            wrap: true,
            selector: (row: studentProps) => row.phone
        },
        {
            name: 'Balance',
            width: '100px',
            wrap: true,
            selector: (row: studentProps) => row.balance
        },
        {
            name: 'Holat',
            width: '100px',
            cell: (row: studentProps) => (
                <PencilIcon width={20} className={"cursor-pointer"}
                            onClick={() => navigate(`${location.pathname}/in?id=${row.id}`)}/>
            )
        }
    ]

    const total_count = 234;
    const current_page = 1;
    const count_item = 20

    return (
        <div className={"flex flex-col p-3 gap-3"}>
            <PageTitle title={"Talabalar"} toggle={toggle} isNew={true}/>
            <Card className={"p-2"}>
                <TableComponent data={students}
                    // progressPending={isLoading}
                                columns={basicColumns}
                    // totalPages={Math.ceil(total_count / (!query ? 15 : query.count))}
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