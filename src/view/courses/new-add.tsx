import SidebarModal from "../../components/modal/sidebar";
import {Button, Input, Option, Radio, Select, Textarea} from "@material-tailwind/react";
import {ModalInterfaceProps} from "../../interface/modal/modal.interface";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";

export default function NewCourseAdd({toggle, open}: ModalInterfaceProps) {

    const {groups} = useSelector((state: RootState) => state.variables)

    return (
        <SidebarModal toggle={toggle} open={open} title={"Yangi kurs qo'shish"}>
            <div className="flex flex-col gap-5">
                <Input name={'name'} size="lg" label="Nomi"/>
                <div className="flex ">
                    <Radio id="online" name="type" label="Online" defaultChecked/>
                    <Radio id="offline" name="type" label="Offline"/>
                    <Radio id="video-course" name="type" label="Video Kurs"/>
                </div>
                <Select variant="outlined" label="Kursni tanlang">
                    {
                        groups.map(({id, name}) =>
                            <Option key={id} value={id.toString()}>{name}</Option>
                        )
                    }
                </Select>
                <Input name={'price'} size="lg" label="Narx"/>
                <Textarea label="Tavsif"/>
                <div className="btn w-full flex justify-start">
                    <Button>Yuborish</Button>
                </div>
            </div>
        </SidebarModal>
    );
}