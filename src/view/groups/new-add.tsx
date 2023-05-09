import SidebarModal from "../../components/modal/sidebar";
import {Button, Input, Option, Select} from "@material-tailwind/react";
import {mockCourse} from "../../mock/data";
import {ModalInterfaceProps} from "../../interface/modal/modal.interface";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";

export default function NewGroupAdd({toggle, open}: ModalInterfaceProps) {

    const {employees, rooms} = useSelector((state: RootState) => state.variables)

    const teacherList = employees.filter(item => item.role.id === 5)

    const daysList = [
        {id: 1, name: "Juft kunlar"},
        {id: 2, name: "Toq kunlar"},
        {id: 3, name: "Dam olish kuni"},
        {id: 4, name: "Har kuni"},
        {id: 5, name: "Boshqa"}
    ]

    return (
        <SidebarModal toggle={toggle} open={open} title={"Yangi guruh qo'shish"}>
            <div className="flex flex-col gap-5">
                <Input name={'name'} size="lg" label="Nomi"/>
                <Select variant="outlined" label="Kursni tanlang">
                    {
                        mockCourse.map(({id, name}) =>
                            <Option key={id} value={id.toString()}>{name}</Option>
                        )
                    }
                </Select>
                <Select variant="outlined" label="O'qituvchini tanlang">
                    {
                        teacherList.map(({id, name}) =>
                            <Option key={id} value={id.toString()}>{name}</Option>
                        )
                    }
                </Select>
                <Select variant="outlined" label="Kunlar">
                    {
                        daysList.map(({id, name}) =>
                            <Option key={id} value={id.toString()}>{name}</Option>
                        )
                    }
                </Select>
                <Select variant="outlined" label="Xona tanlang">
                    {
                        rooms.map(({id, name}) =>
                            <Option key={id} value={id.toString()}>{name}</Option>
                        )
                    }
                </Select>
                <Input name={'time'} type={"datetime-local"} size="lg" label="Guruhni boshlash vaqti"/>
                <div className="btn w-full flex justify-start">
                    <Button>Yuborish</Button>
                </div>
            </div>
        </SidebarModal>
    );
}