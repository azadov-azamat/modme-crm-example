import SidebarModal from "../../../components/modal/sidebar";
import {Button, Textarea} from "@material-tailwind/react";
import {ModalInterfaceProps} from "../../../interface/modal/modal.interface";
import {smsTemplateProps} from "../../../interface/redux/variable.interface";
import {useState} from "react";

interface NewSmsTemplateAddComponentProps extends ModalInterfaceProps {
    smsTemplate?: smsTemplateProps | null
}

export default function NewSmsTemplateAddComponent({toggle, open, smsTemplate}: NewSmsTemplateAddComponentProps) {

    const [textLength, setTextLength] = useState<number>(0)

    return (
        <SidebarModal toggle={toggle} open={open} title={"SMS shablon qo'shish"}>
            <div className="flex flex-col gap-5">
                <div className="">
                    <Textarea label="Xabarni kiriting" defaultValue={smsTemplate?.text} maxLength={3700} onChange={(e) => {
                        setTextLength((e.target.value).length)
                    }}/>
                    <span className={"text-sm text-gray-500"}>{textLength} ta belgi</span>
                </div>
                <div className="btn w-full flex justify-start">
                    <Button>Yuborish</Button>
                </div>
            </div>
        </SidebarModal>
    );
}