import {useSelector} from "react-redux"
import {RootState} from "../../../redux/store"
import {useLocation} from "react-router-dom"
import {useEffect, useState} from "react"
import {studentProps} from "../../../interface/redux/variable.interface"
import {IconButton, Tab, TabPanel, Tabs, TabsBody, TabsHeader, Tooltip, Typography} from "@material-tailwind/react"
import {
    ArrowPathRoundedSquareIcon,
    ArrowUturnLeftIcon,
    BanknotesIcon,
    CalculatorIcon,
    ChatBubbleOvalLeftEllipsisIcon,
    FlagIcon,
    InboxStackIcon,
    PencilIcon,
    TrashIcon
} from "@heroicons/react/24/outline"
import qs from "qs"
import StudentProfileComponent from "../profile";
import CallHistoryComponent from "../call-history";
import StudentHistoryComponent from "../student-history";
import AddPaymentForStudent from "../modals/add-payment";
import NewStudentAddComponent from "../new-add";
import ModalComponent from "../../../components/modal";
import SendSmsForStudent from "../modals/send-sms";

export default function StudentIn(): JSX.Element {

    const location = useLocation()
    const {students} = useSelector((state: RootState) => state.variables)
    const query = qs.parse(location.search, {ignoreQueryPrefix: true})

    const [currentObj, setCurrentObj] = useState<studentProps>()

    const [openPayment, setOpenPayment] = useState<boolean>(false);
    const [openEdit, setOpenEdit] = useState<boolean>(false);
    const [openDelete, setOpenDelete] = useState<boolean>(false);
    const [openSms, setOpenSms] = useState<boolean>(false);

    const toggleSms = () => setOpenSms(!openSms)
    const toggleDelete = () => setOpenDelete(!openDelete)
    const toggleEdit = () => setOpenEdit(!openEdit)
    const togglePayment = () => setOpenPayment(!openPayment)

    useEffect(() => {
        if (query?.id) {
            setCurrentObj(students.find(item => item?.id.toString() === query?.id))
        }
    }, [location])

    const data = [
        {
            label: "Profil",
            value: "profile",
            desc: <StudentProfileComponent student={currentObj}/>,
        },
        {
            label: "Qo'ng'iroqlar tarixi",
            value: "call_history",
            desc: <CallHistoryComponent student={currentObj}/>,
        },
        {
            label: "Tarix",
            value: "history",
            desc: <StudentHistoryComponent/>,
        }
    ]

    function StudentCard() {
        return (
            <div
                className="card-group flex w-full h-fit md:w-1/3 justify-between border bg-white shadow-lg p-4 gap-3">
                <div className="card-title flex flex-col gap-5">
                    <Typography
                        variant="h6"
                        className="font-bold"
                        color={"inherit"}
                    >
                        {currentObj?.name}
                    </Typography>
                    <div className="flex flex-col text-sm">
                        <span>Balansi: <b>{currentObj?.balance} so'm</b></span>
                        <span>Telefon: <b>{currentObj?.phone}</b></span>
                    </div>
                    <div className="flex flex-col text-sm">
                        <span>Tug'ilgan kuni: <b>22/08/2002</b></span>
                    </div>
                    <div className="flex text-sm gap-1">
                        <Tooltip content={"title"} placement="bottom">
                            <IconButton className={'rounded-full'} variant="text" color="blue-gray">
                                <InboxStackIcon className="w-5"/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip content={"title"} placement="bottom">
                            <IconButton className={'rounded-full'} variant="text" color="blue-gray">
                                <ArrowPathRoundedSquareIcon className="w-5"/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip content={"To'lov qo'shish"} placement="bottom">
                            <IconButton className={'rounded-full'} variant="text" color="blue-gray"
                                        onClick={togglePayment}>
                                <BanknotesIcon className="w-5"/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip content={"title"} placement="bottom">
                            <IconButton className={'rounded-full'} variant="text" color="blue-gray">
                                <ArrowUturnLeftIcon className="w-5"/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip content={"Kalkulyator"} placement="bottom">
                            <IconButton className={'rounded-full'} variant="text" color="blue-gray">
                                <CalculatorIcon className="w-5"/>
                            </IconButton>
                        </Tooltip>
                    </div>

                </div>
                <div className="flex flex-col gap-1 items-center">
                    <Tooltip content={"title"} placement="right">
                        <IconButton className={'rounded-full'} variant="text" color="blue-gray">
                            <FlagIcon className="w-5"/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip content={"O'zgartirish kiritish"} placement="right">
                        <IconButton className={'rounded-full'} variant="text" color="blue-gray" onClick={toggleEdit}>
                            <PencilIcon className="w-5"/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip content={"Xabar jo'natish"} placement="right">
                        <IconButton className={'rounded-full'} variant="text" color="blue-gray" onClick={toggleSms}>
                            <ChatBubbleOvalLeftEllipsisIcon className="w-5"/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip content={"O'chirish"} placement="right">
                        <IconButton className={'rounded-full'} variant="text" color="blue-gray" onClick={toggleDelete}>
                            <TrashIcon className="w-5"/>
                        </IconButton>
                    </Tooltip>
                </div>
            </div>
        )
    }

    return (
        <div className={"p-3 flex flex-col gap-3"}>
            <div className="w-full">
                <Typography
                    variant="h4"
                    className="font-normal"
                    color={"inherit"}
                >
                    {currentObj?.name}
                </Typography>
            </div>
            <div className="w-full flex flex-col md:flex-row gap-4">
                <StudentCard/>
                <div className="w-full">
                    <Tabs value="profile">
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
            <AddPaymentForStudent toggle={togglePayment} open={openPayment} student={currentObj}/>
            <NewStudentAddComponent open={openEdit} toggle={toggleEdit} student={currentObj}/>
            <SendSmsForStudent open={openSms} toggle={toggleSms}/>
            <ModalComponent open={openDelete} toggle={toggleDelete} header={"Talabani o'chirib tashlash"}
                            body={"Ushbu talabani guruhdan olib tashlamoqchimisiz?"}/>
        </div>
    )
}