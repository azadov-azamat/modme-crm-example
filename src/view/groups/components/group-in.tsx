import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {groupsProps, studentProps} from "../../../interface/redux/variable.interface";
import {IconButton, Tooltip, Typography} from "@material-tailwind/react";
import {PencilIcon, TrashIcon} from "@heroicons/react/24/outline";
import qs from "qs"

export default function GroupIn(): JSX.Element {

    const location = useLocation()
    const {groups} = useSelector((state: RootState) => state.variables)
    const query = qs.parse(location.search, {ignoreQueryPrefix: true})

    const [currentObj, setCurrentObj] = useState<groupsProps>()

    console.log(query)

    useEffect(() => {
        if (query?.id) {
            setCurrentObj(groups.find(item => item.id === query.id))
        }
    }, [location])

    console.log(currentObj)

    return (
        <div className={"p-3 flex flex-col gap-3"}>
            <div className="w-full">
                <Typography
                    variant="h4"
                    className="font-normal"
                    color={"inherit"}
                >
                    {currentObj?.id + " * " + currentObj?.name + " * " + currentObj?.teacher}
                </Typography>
            </div>
            <div className="w-full">
                <div className="card-group flex flex-col w-1/3 h-auto border bg-white shadow-lg p-4 gap-3">
                    <div className="card-title flex justify-between items-center">
                        <Typography
                            variant="span"
                            className="font-normal"
                            color={"inherit"}
                        >
                            {currentObj?.id}
                        </Typography>
                        <div className="flex gap-3 items-center">
                            <IconButton variant="text" color="blue-gray">
                                <PencilIcon className="h-4 w-4"/>
                            </IconButton>
                            <IconButton variant="text" color="blue-gray">
                                <TrashIcon className="h-4 w-4"/>
                            </IconButton>
                        </div>
                    </div>
                    <p>
                        {currentObj?.name + " * " + currentObj?.teacher}
                    </p>
                    <div className="flex flex-col text-sm">
                        <span>Narxi: <b>{currentObj?.narx}</b></span>
                        <span>Kunlar: <b>{currentObj?.days}</b></span>
                    </div>
                    <div className="flex flex-col text-sm">
                        <span>Xonalar: <b>{currentObj?.room}</b></span>
                        <span>Boshlash: <b>{currentObj?.startTime}</b></span>
                    </div>
                    <div className="flex flex-col text-sm">
                        <span>Boshlash sanasi: <b>{currentObj?.startDate}</b></span>
                        <span>Tugash sanasi: <b>{currentObj?.finalDate}</b></span>
                    </div>
                    <hr/>
                    <StudentTable students={currentObj?.students}/>
                </div>
                <div className="">

                </div>
            </div>
        </div>
    );
}

interface StudentsTableProps {
    students: studentProps[] | undefined
}

function StudentTable({students}: StudentsTableProps): JSX.Element {

    const TABLE_HEAD = ["Name", "phone", "action"];

    return (
        <table className="w-full min-w-max table-auto text-left">
            <thead>
            <tr>
                {TABLE_HEAD.map((head) => (
                    <th key={head} className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal leading-none opacity-70"
                        >
                            {head}
                        </Typography>
                    </th>
                ))}
            </tr>
            </thead>
            <tbody>
            {students?.map(
                ({name, phone}, index) => {
                    const classes = "p-1 border-b border-blue-gray-50";

                    return (
                        <tr key={index}>
                            <td className={classes}>
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {name}
                                </Typography>
                            </td>
                            <td className={classes}>
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {phone}
                                </Typography>
                            </td>
                            <td className={classes}>
                                <Tooltip content="O'zgartirish kiritish">
                                    <IconButton variant="text" color="blue-gray">
                                        <PencilIcon className="h-4 w-4"/>
                                    </IconButton>
                                </Tooltip>
                            </td>
                        </tr>
                    );
                },
            )}
            </tbody>
        </table>
    )
}