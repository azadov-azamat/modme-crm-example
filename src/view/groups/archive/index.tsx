import {PencilIcon} from "@heroicons/react/24/solid";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {groupsProps} from "../../../interface/redux/variable.interface";
import TableComponent from "../../../components/table";
import {useLocation, useNavigate} from "react-router-dom";

export default function Archive() {

    const navigate = useNavigate()
    const location = useLocation()
    // const query = qs.parse(location.search, {ignoreQueryPrefix: true})
    const {groups} = useSelector((state: RootState) => state.variables)

    const basicColumns: any = [
        {
            name: "Id",
            width: '150px',
            wrap: true,
            selector: (row: groupsProps) => row.id
        },
        {
            name: 'Nomi',
            width: '120px',
            wrap: true,
            selector: (row: groupsProps) => row.name
        },
        {
            name: "O'qituvchi",
            width: '200px',
            wrap: true,
            selector: (row: groupsProps) => row.teacher.name
        },
        {
            name: 'Vaqt',
            width: '100px',
            wrap: true,
            selector: (row: groupsProps) => row.startTime
        },
        {
            name: 'Kunlar',
            wrap: true,
            width: '150px',
            selector: (row: groupsProps) => row.days
        },
        {
            name: 'Holat',
            width: '100px',
            cell: (row: groupsProps) => (
                <PencilIcon width={20} className={"cursor-pointer"} onClick={()=> navigate(`${location.pathname}/in?id=${row.id}`)}/>
            )
        }
    ]

    const total_count = 234;
    const current_page = 1;
    const count_item = 20

    return (
        <TableComponent data={groups.filter(item => !item.status)}
            // progressPending={isLoading}
                        columns={basicColumns}
            // totalPages={Math.ceil(total_count / (!query ? 15 : query.count))}
                        totalPages={Math.ceil(total_count / 15)}
                        currentPage={current_page}
                        size={count_item}
                        totalCount={total_count}
        />
    );
}