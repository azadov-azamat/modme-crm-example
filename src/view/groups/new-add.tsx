import SidebarModal from "../../components/modal/sidebar";
import {Button, Input, Option, Select} from "@material-tailwind/react";
import {mockCourse} from "../../mock/data";
import {ModalInterfaceProps} from "../../interface/modal/modal.interface";

export default function NewGroupAdd({toggle, open}: ModalInterfaceProps) {

    const teacherList = [
        {id: 1, name: "Ms. Ezoza"},
        {id: 2, name: "Mr. Sherzod"},
        {id: 3, name: "Ms. Nafisa"},
        {id: 4, name: "Mr. Sherali"}
    ]

    const daysList = [
        {id: 1, name: "Juft kunlar"},
        {id: 2, name: "Toq kunlar"},
        {id: 3, name: "Boshqa"}
    ]

    const roomsList = [
        {id: 1, name: "1 - xona"},
        {id: 2, name: "2 - xona"},
        {id: 3, name: "3 - xona"}
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
                        roomsList.map(({id, name}) =>
                            <Option key={id} value={id.toString()}>{name}</Option>
                        )
                    }
                </Select>
                <div className="btn w-full flex justify-start">
                    <Button>Yuborish</Button>
                </div>
            </div>
        </SidebarModal>
    );
}