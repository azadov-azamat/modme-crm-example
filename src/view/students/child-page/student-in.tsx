import {useSelector} from "react-redux"
import {RootState} from "../../../redux/store"
import {useLocation} from "react-router-dom"
import {useEffect, useState} from "react"
import {studentProps} from "../../../interface/redux/variable.interface"
import {IconButton, Tab, TabPanel, Tabs, TabsBody, TabsHeader, Typography} from "@material-tailwind/react"
import {
    ArrowPathRoundedSquareIcon, ArrowUturnLeftIcon,
    BanknotesIcon, CalculatorIcon,
    ChatBubbleOvalLeftEllipsisIcon,
    FlagIcon, InboxStackIcon,
    PencilIcon,
    TrashIcon
} from "@heroicons/react/24/outline"
import qs from "qs"

export default function StudentIn(): JSX.Element {

    const location = useLocation()
    const {students} = useSelector((state: RootState) => state.variables)
    const query = qs.parse(location.search, {ignoreQueryPrefix: true})

    const [currentObj, setCurrentObj] = useState<studentProps>()

    useEffect(() => {
        if (query) {
            setCurrentObj(students.find<studentProps>(({id}) => id === parseInt(query?.id)))
        }
    }, [location])

    const data = [
        {
            label: "Profil",
            value: "profile",
            desc: "sdgdf",
        },
        {
            label: "Qo'ng'iroqlar tarixi",
            value: "call_history",
            desc: "sdfgsdf",
        },
        {
            label: "Tarix",
            value: "history",
            desc: "sdfgsdf",
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
                    {currentObj?.name}
                </Typography>
            </div>
            <div className="w-full flex flex-col md:flex-row gap-4">
                <div
                    className="card-group flex w-full md:w-1/3 justify-between h-auto border bg-white shadow-lg p-4 gap-3">
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
                            <IconButton className={'rounded-full'} variant="text" color="blue-gray">
                                <InboxStackIcon className="w-5"/>
                            </IconButton>
                            <IconButton className={'rounded-full'} variant="text" color="blue-gray">
                                <ArrowPathRoundedSquareIcon className="w-5"/>
                            </IconButton>
                            <IconButton className={'rounded-full'} variant="text" color="blue-gray">
                                <BanknotesIcon className="w-5"/>
                            </IconButton>
                            <IconButton className={'rounded-full'} variant="text" color="blue-gray">
                                <ArrowUturnLeftIcon className="w-5"/>
                            </IconButton>
                            <IconButton className={'rounded-full'} variant="text" color="blue-gray">
                                <CalculatorIcon className="w-5"/>
                            </IconButton>
                        </div>

                    </div>
                    <div className="flex flex-col gap-1 items-center">
                        <IconButton className={'rounded-full'} variant="text" color="blue-gray">
                            <FlagIcon className="w-5"/>
                        </IconButton>
                        <IconButton className={'rounded-full'} variant="text" color="blue-gray">
                            <PencilIcon className="w-5"/>
                        </IconButton>
                        <IconButton className={'rounded-full'} variant="text" color="blue-gray">
                            <ChatBubbleOvalLeftEllipsisIcon className="w-5"/>
                        </IconButton>
                        <IconButton className={'rounded-full'} variant="text" color="blue-gray">
                            <TrashIcon className="w-5"/>
                        </IconButton>
                    </div>
                </div>
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
        </div>
    )
}