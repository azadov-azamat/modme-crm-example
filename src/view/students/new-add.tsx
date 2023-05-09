import SidebarModal from "../../components/modal/sidebar";
import {Button, Input, Radio, Textarea} from "@material-tailwind/react";
import {ModalInterfaceProps} from "../../interface/modal/modal.interface";
import {studentProps} from "../../interface/redux/variable.interface";

interface NewStudentAddComponentProps extends ModalInterfaceProps {
    student?: studentProps | null
}
export default function NewStudentAddComponent({toggle, open, student}: NewStudentAddComponentProps) {

    return (
        <SidebarModal toggle={toggle} open={open} title={"Yangi kurs qo'shish"}>
            <div className="flex flex-col gap-5">
                <div className="flex items-center w-full h-auto">
                    <span
                        className={'flex items-center h-10 p-3 rounded-r-none border rounded-l-lg border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3'}>+998</span>
                    <Input
                        type="tel"
                        placeholder="Mobile Number"
                        className="rounded-l-none !border-t-blue-gray-200 focus:!border-t-blue-500"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        defaultValue={student?.phone}
                        containerProps={{
                            className: "min-w-0",
                        }}
                    />
                </div>
                <Input name={'name'} size="lg" label="Ismi" defaultValue={student?.name}/>
                <Input name={'birthdate'} type={"date"} size="lg" label="Tug'ilgan sanasi"/>
                <div className="flex">
                    <Radio id="man" name="type" label="Erkak" defaultChecked/>
                    <Radio id="woman" name="type" label="Ayol"/>
                </div>
                <Textarea label="Tavsif"/>
                <div className="btn w-full flex justify-start">
                    <Button>Yuborish</Button>
                </div>
            </div>
        </SidebarModal>
    );
}