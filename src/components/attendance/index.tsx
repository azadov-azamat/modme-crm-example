// Davomat paneli
import {StudentsTableProps} from "../../interface/groups/groups-in.interface";
import {AttDaysProps, AttendanceDataProps, studentProps} from "../../interface/redux/variable.interface";
import TableComponent from "../table";
import {TableColumn} from "react-data-table-component";
import {MinusCircleIcon, PlusCircleIcon, XCircleIcon} from "@heroicons/react/24/outline";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {findAtt} from "../../config/constants";
import {useCallback, useState} from "react";
import {addNewAttData} from "../../redux/reducers/variable";

export default function AttendanceComponent({students}: StudentsTableProps) {

    const dispatch = useDispatch()
    const [isHere, setIsHere] = useState<boolean>(false)
    const toggleHere = () => setIsHere(!isHere)

    const {attendance} = useSelector((state: RootState) => state.variables)

    const newAtt = useCallback(async (student: studentProps) => {
        toggleHere()
        const date = new Date()

        const attDays: AttDaysProps = {
            day: date.getDate(),
            isAtt: isHere
        }

        const data: AttendanceDataProps = {
            id: Math.floor(Math.random() * ((date.getDate() + 5) - date.getDate() + 1) + date.getDate()),
            studentId: student.id,
            groupId: student.groupId,
            attDays: [attDays]
        }
        dispatch(addNewAttData(data))
    }, [])


    const basicColumns: TableColumn<any>[] = [
        {
            name: "Ismi",
            width: '150px',
            wrap: true,
            cell: (row: studentProps) => row.name
        },
        ...tableColumns(attendance, newAtt)
    ]

    const total_count = 234;
    const current_page = 1;
    const count_item = 20

    return (
        <div className={'w-full border bg-white shadow-lg p-2'}>
            <TableComponent data={students}
                // progressPending={isLoading}
                            columns={basicColumns}
                // totalPages={Math.ceil(total_count / (!query ? 15 : query.count))}
                            totalPages={Math.ceil(total_count / 15)}
                            currentPage={current_page}
                            size={count_item}
                            isPagination={false}
                            totalCount={total_count}
            />
        </div>
    );
}

function tableColumns(att: AttendanceDataProps[], addAtt: any) {

    const date = new Date()
    const day = date.getDate()

    const tableHeaderData = []

    const nextWeekend: number = (7 - date.getDay()) + date.getDate()
    const lastWeekend: number = date.getDate() - (7 - date.getDay()) - 1

    for (let i = day - 4; i <= day + 4; i++) {

        const data = {
            name: i.toString(),
            width: "70px",
            wrap: true,
            cell: (row: studentProps) => (
                <div>{
                    lastWeekend !== i && nextWeekend !== i ? i <= day
                            ?
                            !findAtt(row, att, i)
                                ?
                                <><PlusCircleIcon width={25} className={'cursor-pointer text-green-500'}
                                                  onClick={() => addAtt(row)}/></>
                                :
                                <><MinusCircleIcon width={25} className={'cursor-pointer text-red-500'}
                                                   onClick={() => addAtt(row)}/></>
                            :
                            <XCircleIcon width={25}
                                         className={"cursor-not-allowed text-gray-500"}/>
                        : <XCircleIcon width={25}
                                       className={"cursor-not-allowed text-yellow-500"}/>
                }
                </div>
            )
        }

        tableHeaderData.push(data)
    }
    return tableHeaderData;
}