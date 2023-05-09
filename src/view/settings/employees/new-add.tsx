import SidebarModal from "../../../components/modal/sidebar";
import {Button, Input, Option, Radio, Select, Textarea} from "@material-tailwind/react";
import {ModalInterfaceProps} from "../../../interface/modal/modal.interface";
import {employeesProps} from "../../../interface/redux/variable.interface";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";

interface NewEmployeesAddComponentProps extends ModalInterfaceProps {
    teacher?: employeesProps | null
}

export default function NewEmployeesAddComponent({toggle, open, teacher}: NewEmployeesAddComponentProps) {
    const {roles} = useSelector((state: RootState) => state.variables)
    return (
        <SidebarModal toggle={toggle} open={open} title={"Yangi xodim qo'shish"}>
            <div className="flex flex-col gap-5">
                <Input name={'name'} size="lg" label="Ismi" defaultValue={teacher?.name}/>
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
                        defaultValue={teacher?.phone}
                        containerProps={{
                            className: "min-w-0",
                        }}
                    />
                </div>
                <Input name={'password'} size="lg" label="Parol" type={'password'} defaultValue={teacher?.password}/>
                <Select variant="outlined" label="Rol tanlang">
                    {
                        roles.map(({id, name}) =>
                            <Option key={id} value={id.toString()}>{name}</Option>
                        )
                    }
                </Select>
                <Input name={'birthdate'} type={"date"} size="lg" label="Tug'ilgan sanasi"/>
                <div className="flex">
                    <Radio id="man" name="type" label="Erkak" defaultChecked={teacher?.gender}/>
                    <Radio id="woman" name="type" label="Ayol" defaultChecked={!teacher?.gender}/>
                </div>
                <Input name={'photo'} type={"file"} size="lg" label="Foto surat"/>
                <Textarea label="Tavsif"/>
                <div className="btn w-full flex justify-start">
                    <Button>Yuborish</Button>
                </div>
            </div>
        </SidebarModal>
    );
}