import {Button, Textarea, Typography} from "@material-tailwind/react";
import SidebarModal from "../../../components/modal/sidebar";
import {ModalInterfaceProps} from "../../../interface/modal/modal.interface";
import {studentProps} from "../../../interface/redux/variable.interface";
import {useState} from "react";

interface SendSmsForStudentProps extends ModalInterfaceProps {
    student?: studentProps | undefined;
}

export default function SendSmsForStudent({toggle, open}: SendSmsForStudentProps) {

    const [textLength, setTextLength] = useState<number>(0)

    return (
        <SidebarModal toggle={toggle} open={open} title={"Talabaga SMS yuborish"}>
            <div className="flex flex-col gap-5">
                <Typography variant={'h6'}>Yuboruvchi: 3700</Typography>
                <div className="">
                    <Textarea label="Xabarni kiriting" maxLength={3700} onChange={(e) => {
                        setTextLength((e.target.value).length)
                    }}/>
                    <span className={"text-sm text-gray-500"}>{textLength} ta belgi</span>
                </div>
                <div className="btn w-full flex justify-start">
                    <Button>SMS yuborish</Button>
                </div>
            </div>
        </SidebarModal>
    );
}