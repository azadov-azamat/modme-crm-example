import {useSelector} from "react-redux"
import {RootState} from "../../../redux/store"
import {useLocation} from "react-router-dom"
import {useEffect, useState} from "react"
import {groupsProps, studentProps} from "../../../interface/redux/variable.interface"
import {
    IconButton,
    Menu,
    MenuHandler,
    MenuItem,
    MenuList,
    Tab,
    TabPanel,
    Tabs,
    TabsBody,
    TabsHeader,
    Typography
} from "@material-tailwind/react"
import {
    EllipsisHorizontalCircleIcon,
    PauseIcon,
    PencilIcon,
    TrashIcon,
    UserCircleIcon
} from "@heroicons/react/24/outline"
import qs from "qs"
import {ProfileMenuProps, StudentsTableProps} from "../../../interface/groups/groups-in.interface"
import AttendanceComponent from "../../../components/attendance"
import DiscountsComponent from "../../../components/discounts"
import ModalComponent from "../../../components/modal";

export default function GroupIn(): JSX.Element {

    const location = useLocation()
    const {groups, students} = useSelector((state: RootState) => state.variables)
    const query = qs.parse(location.search, {ignoreQueryPrefix: true})

    const [currentObj, setCurrentObj] = useState<groupsProps | null>()
    const [openDelete, setOpenDelete] = useState<boolean>(false);
    const [groupStudent, setGroupStudent] = useState<studentProps[]>()

    const toggleDelete = () => setOpenDelete(!openDelete)

    useEffect(() => {
        if (query) {
            setCurrentObj(groups?.find(item => item?.id === query?.id))
        }
    }, [location])

    useEffect(() => {
        if (currentObj !== null) setGroupStudent(students.filter(e => e.groupId === currentObj?.id))
    }, [currentObj])

    const data = [
        {
            label: "Davomat",
            value: "davomat",
            desc: <AttendanceComponent students={groupStudent}/>,
        },
        {
            label: "Chegirmalar",
            value: "aksiya",
            desc: <DiscountsComponent students={groupStudent}/>,
        }
    ]

    return (
        <div className={"p-3 flex flex-col gap-3"}>
            <div className="w-full">
                <Typography
                    variant="h4"
                    className="font-normal"
                    color={"inherit"}
                >
                    {currentObj?.id + " * " + currentObj?.name + " * " + currentObj?.teacher.name}
                </Typography>
            </div>
            <div className="w-full flex flex-col md:flex-row gap-4">
                <div className="card-group flex flex-col w-full md:w-1/3 h-auto border bg-white shadow-lg p-4 gap-3">
                    <div className="card-title flex justify-between items-center">
                        <Typography
                            variant="h6"
                            className="font-normal"
                            color={"inherit"}
                        >
                            {currentObj?.id}
                        </Typography>
                        <div className="flex gap-3 items-center">
                            <IconButton variant="text" color="blue-gray">
                                <PencilIcon className="w-5"/>
                            </IconButton>
                            <IconButton variant="text" color="blue-gray" onClick={toggleDelete}>
                                <TrashIcon className="w-5"/>
                            </IconButton>
                        </div>
                    </div>
                    <p>
                        {currentObj?.name + " * " + currentObj?.teacher.name}
                    </p>
                    <div className="flex flex-col text-sm">
                        <span>Narxi: <b>{currentObj?.price}</b></span>
                        <span>Kunlar: <b>{currentObj?.days}</b></span>
                    </div>
                    <div className="flex flex-col text-sm">
                        <span>Xonalar: <b>{currentObj?.room.name}</b></span>
                        <span>Boshlash: <b>{currentObj?.startTime}</b></span>
                    </div>
                    <div className="flex flex-col text-sm">
                        <span>Boshlash sanasi: <b>{currentObj?.startDate}</b></span>
                        <span>Tugash sanasi: <b>{currentObj?.finalDate}</b></span>
                    </div>
                    <hr/>
                    <StudentTable students={groupStudent}/>
                </div>
                <div className="w-full">
                    <Tabs value="davomat">
                        <TabsHeader>
                            {data.map(({label, value}) => (
                                <Tab key={value} value={value}>
                                    {label}
                                </Tab>
                            ))}
                        </TabsHeader>
                        <TabsBody>
                            {data.map(({value, desc}) => (
                                <TabPanel key={value} value={value}>
                                    {desc}
                                </TabPanel>
                            ))}
                        </TabsBody>
                    </Tabs>
                </div>
            </div>
            <ModalComponent open={openDelete} toggle={toggleDelete} header={"Guruhni o'chirib tashlash"}
                            body={"Ushbu guruhni olib tashlamoqchimisiz?"}/>
        </div>
    )
}

function StudentTable({students}: StudentsTableProps): JSX.Element {

    const TABLE_HEAD = ["Name", "phone", "action"]

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
                ({name, phone, balance}, index) => {
                    const classes = "p-1 border-b border-blue-gray-50"

                    return (
                        <tr key={index}>
                            <td className={classes}>
                                <ProfileMenu name={name} balance={balance} phone={phone}/>
                            </td>
                            <td className={classes}>
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {phone}
                                </Typography>
                            </td>
                            <td className={classes}>
                                <StudentListAction/>
                            </td>
                        </tr>
                    )
                },
            )}
            </tbody>
        </table>
    )
}

function ProfileMenu({name, balance, phone}: ProfileMenuProps) {
    return (
        <Menu placement={"right"}>
            <MenuHandler>
                <span className={"cursor-pointer"}>{name}</span>
            </MenuHandler>
            <MenuList className="flex flex-col items-center gap-2">
                <MenuItem>
                    <div className="flex items-center gap-2">
                        <UserCircleIcon width={30}/>
                        <div className="flex flex-col items-start">
                            <h4 className={'font-bold'}>{name}</h4>
                            <span className={'text-xs'}>Holati o'zgartirilgan</span>
                        </div>
                    </div>
                </MenuItem>
                <hr className={'font-bold w-full'}/>
                <MenuItem className={"cursor-default"}>
                    <div className="flex flex-col gap-1">
                        <span className={"text-xs"}>Telefon</span>
                        <p>{phone}</p>
                    </div>
                </MenuItem>
                <hr className={'font-bold w-full'}/>
                <MenuItem className={"cursor-default"}>
                    <div className="flex flex-col gap-1">
                        <span className={"text-xs"}>Balans</span>
                        <p>{balance} UZS</p>
                    </div>
                </MenuItem>
            </MenuList>
        </Menu>
    )
}

function StudentListAction() {
    return (
        <Menu placement={"right"}>
            <MenuHandler>
                <IconButton variant="text" color="blue-gray">
                    <EllipsisHorizontalCircleIcon className="w-6"/>
                </IconButton>
            </MenuHandler>
            <MenuList className="flex flex-col items-center gap-2">
                <MenuItem>
                    <div className="flex items-center gap-2">
                        <PauseIcon width={20}/>
                        <span className={'text-xs'}>Muzlash</span>
                    </div>
                </MenuItem>
                <hr className={'font-bold w-full'}/>
                <MenuItem className={"cursor-default"}>
                    <div className="flex items-center gap-2">
                        <TrashIcon width={20}/>
                        <span className={"text-xs"}>Guruhdan olib tashlash</span>
                    </div>
                </MenuItem>
            </MenuList>
        </Menu>
    )
}