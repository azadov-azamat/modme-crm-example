import {Button, Input, Option, Radio, Select, Textarea} from "@material-tailwind/react";
import SidebarModal from "../../../components/modal/sidebar";
import {ModalInterfaceProps} from "../../../interface/modal/modal.interface";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {studentProps} from "../../../interface/redux/variable.interface";

interface AddPaymentForStudentProps extends ModalInterfaceProps{
    student: studentProps | undefined;
}
export default function AddPaymentForStudent({toggle, open, student}: AddPaymentForStudentProps) {

    const {groups} = useSelector((state: RootState) => state.variables)

    return (
        <SidebarModal toggle={toggle} open={open} title={"To'lov qo'shish"}>
            <div className="flex flex-col gap-5">
                <Input name={'name'} size="lg" label="Ismi" value={student?.name}/>
                <Select variant="outlined" label="Kursni tanlang">
                    {
                        groups.map(({id, name, teacher, startTime}) =>
                            <Option key={id} value={id.toString()}>{name} - {teacher.name} - {startTime}</Option>
                        )
                    }
                </Select>
                <div className="flex">
                    <div className="flex flex-col">
                        <Radio id="man" name="type" label="Naqd pul" defaultChecked/>
                        <Radio id="plastic_card" name="type" label="Plastik karta"/>
                        <Radio id="bank-shot" name="type" label="Bank xisobi"/>
                    </div>
                    <div className="flex flex-col">
                        <Radio id="payme" name="type" label="Payme"/>
                        <Radio id="click" name="type" label="Click"/>
                        <Radio id="apelsin" name="type" label="Apelsin"/>
                    </div>
                </div>
                <Input name={'pay_count'} size="lg" label="Miqdor"/>
                <Input name={'date'} type={"date"} size="lg" label="Sana"/>
                <Textarea label="Tavsif"/>
                <div className="btn w-full flex justify-start">
                    <Button>Yuborish</Button>
                </div>
            </div>
        </SidebarModal>
    );
}