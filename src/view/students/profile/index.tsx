import {StudentInterfaceProps} from "../../../interface/student/student.interface";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {useEffect, useState} from "react";
import {groupsProps} from "../../../interface/redux/variable.interface";
import {Typography} from "@material-tailwind/react";
import {FlagIcon} from "@heroicons/react/24/outline";
import TableComponent from "../../../components/table";

export default function StudentProfileComponent({student}: StudentInterfaceProps) {

    const {groups} = useSelector((state: RootState) => state.variables)

    const [group, setGroup] = useState<groupsProps>()

    useEffect(() => {
        setGroup(groups?.find(item => item.id === student?.groupId))
    }, [student])

    const basicColumns: any = [
        {
            name: "Sana",
            width: '150px',
            wrap: true
        },
        {
            name: "Miqdor",
            width: '150px',
            wrap: true
        },
        {
            name: "Izoh",
            width: '150px',
            wrap: true
        },
        {
            name: "Hodim",
            width: '150px',
            wrap: true
        }
    ]

    const total_count = 234;
    const current_page = 1;
    const count_item = 20

    return (
        <div className={'flex flex-col gap-3'}>
            <div
                className="list-group w-full p-3 flex justify-between items-center bg-white shadow-lg rounded border-l-4 border-indigo-600">
                <Typography variant={'h6'}>{group?.name}</Typography>
                <FlagIcon width={25}/>
            </div>
            <Typography variant={'h4'}>Guruhlar</Typography>
            <div className="group-card w-1/2 h-auto p-3 bg-white shadow-lg">
                <div className="flex justify-between border-b-2 pb-3">
                    <div className="flex flex-col font-bold">
                        <span>{group?.name}</span>
                        <span>{group?.teacher.name}</span>
                    </div>
                    <div className="flex flex-col text-sm">
                        <span>{group?.startDate} - <br/> {group?.finalDate}</span>
                        <span>{group?.days} * {group?.startTime}</span>
                    </div>
                </div>
                <div className="flex flex-col pt-3">
                    <span>Holat: <b className={'font-bold'}>Harakatsiz (Sinov)</b></span>
                    <span>Talaba qo'shilgan sana: <b className={'font-bold'}>20/07/2023</b></span>
                    <span>Bu talaba uchun narx: <b className={'font-bold'}>{group?.price} so'm</b></span>
                </div>
            </div>
            <Typography variant={'h4'}>To'lovlar</Typography>
           <div className="w-full bg-white shadow-lg p-3">
               <TableComponent data={[]}
                               columns={basicColumns}
                               totalPages={Math.ceil(total_count / 15)}
                               currentPage={current_page}
                               size={count_item}
                               totalCount={total_count}
               />
           </div>
        </div>
    );
}