import {Button, Textarea, Typography} from "@material-tailwind/react";
import SidebarModal from "../../../components/modal/sidebar";
import {ModalInterfaceProps} from "../../../interface/modal/modal.interface";
import {studentProps} from "../../../interface/redux/variable.interface";
import {useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";

interface SendSmsForStudentProps extends ModalInterfaceProps {
    student?: studentProps | undefined;
}

export default function SendSmsForStudent({toggle, open}: SendSmsForStudentProps) {

    const {smsTemplates} = useSelector((state: RootState) => state.variables)
    const [textLength, setTextLength] = useState<string>("")

    return (
        <SidebarModal toggle={toggle} open={open} title={"Talabaga SMS yuborish"}>
            <div className="flex flex-col gap-5">
                <Typography variant={'h6'}>Yuboruvchi: 3700</Typography>
                <div className="">
                    <Textarea label="Xabarni kiriting" value={textLength} maxLength={3700} onChange={(e) => {
                        setTextLength(e.target.value)
                    }}/>
                    <span className={"text-sm text-gray-500"}>{textLength.length} ta belgi</span>
                </div>
                <Typography variant={'h6'}>SMS shablonlar</Typography>
                {
                    smsTemplates.map((item, key) =>
                        <div key={key} className="w-full w-64 shadow-lg text-sm flex-wrap border p-3 cursor-pointer" onClick={()=> setTextLength(item.text)}>
                            {item.text}
                        </div>
                    )
                }
                <div className="btn w-full flex justify-start">
                    <Button>SMS yuborish</Button>
                </div>
            </div>
        </SidebarModal>
    );
}