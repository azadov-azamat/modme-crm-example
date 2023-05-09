import SidebarModal from "../../../components/modal/sidebar";
import {Button, Input, Textarea} from "@material-tailwind/react";
import {ModalInterfaceProps} from "../../../interface/modal/modal.interface";
import {employeesProps} from "../../../interface/redux/variable.interface";

interface NewRoomAddComponentProps extends ModalInterfaceProps {
    teacher?: employeesProps | null
}

export default function NewRoomAddComponent({toggle, open, teacher}: NewRoomAddComponentProps) {

    return (
        <SidebarModal toggle={toggle} open={open} title={"Yangi xona qo'shish"}>
            <div className="flex flex-col gap-5">
                <Input name={'name'} size="lg" label="Nomi" defaultValue={teacher?.name}/>
                <Textarea label="Tavsif"/>
                <div className="btn w-full flex justify-start">
                    <Button>Yuborish</Button>
                </div>
            </div>
        </SidebarModal>
    );
}