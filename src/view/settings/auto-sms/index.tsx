import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import SmsSwitchComponent from "../../../components/sms-switch";
import {Button, Textarea, Typography} from "@material-tailwind/react";
import {useState} from "react";
import {autoSmsProps} from "../../../interface/redux/variable.interface";

export default function AutoSmsComponent() {

    const {autoSms} = useSelector((state: RootState) => state.variables)
    const [selectSms, setSelectSms] = useState<autoSmsProps>()

    return (
        <div className={'w-full flex flex-col md:flex-row justify-between gap-5'}>
            <div className="flex flex-col gap-3 w-full md:w-1/3">
                <Typography variant={'h6'}>SMS turi</Typography>
                {autoSms.map((item, key) => <SmsSwitchComponent id={item.id} checked={item.isSend} text={item.title}
                                                                key={key} clicked={() => setSelectSms(item)}/>)}
            </div>
            <div className="flex flex-col gap-3 w-full md:w-1/3">
                <Typography variant={'h6'}>SMS matn: {selectSms?.title}</Typography>
                <Textarea className={"bg-white"} label="SMS-matn" defaultValue={selectSms?.text}/>

                <Typography variant={'h6'}>Yuborilgan SMS misoli</Typography>
                <div className="">
                    <Textarea className={"bg-white"} label="SMS-matn" disabled defaultValue={selectSms?.text}/>
                    <span className={"text-sm text-gray-500"}>{selectSms?.text.length} ta belgi</span>
                </div>
                <div className={"w-full flex justify-end"}>
                    <Button>Saqlash</Button>
                </div>
            </div>
            <div className="flex flex-col gap-3 w-full md:w-1/3">
                <Typography variant={'h6'}>Tavsif</Typography>
                <div className="border border-black/25 rounded-lg p-3 flex flex-col gap-3">
                    <Typography variant={'paragraph'} className={'font-normal text-sm'}>{selectSms?.desc}</Typography>
                    <Typography variant={'h6'}>Mavjud o'zgaruvchilar</Typography>
                    <div className="flex flex-col gap-2 text-sm">
                        <span><b>(STUDENT)</b> - talabaning ismi</span>
                        <span><b>(GROUP)</b> - guruh nomi</span>
                        <span><b>(SUM)</b> - to'lob miqdori</span>
                        <span><b>(LC)</b> - o'quv markazingiz nomi</span>
                        <span><b>(TEACHER)</b> - auto-sms-teacher</span>
                        <span><b>(TIME)</b> - vaqt</span>
                        <span><b>(ROOM)</b> - xona</span>
                        <span><b>(DAYS)</b> - kunlar</span>
                    </div>
                </div>
            </div>
        </div>
    );
}