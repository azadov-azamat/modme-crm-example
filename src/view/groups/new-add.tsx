import SidebarModal from "../../components/modal/sidebar";
import React from "react";
import {Button, Input, Option, Select} from "@material-tailwind/react";

interface NewAddComponentProps {
    open: boolean;
    toggle: React.MouseEventHandler<HTMLButtonElement>;
}

export default function NewAdd({toggle, open}: NewAddComponentProps) {

    const courseList = [
        {id: 1, name: "SMM", value: "smm"},
        {id: 1, name: "Motion grafika", value: "motion_graphic"},
        {id: 1, name: "3D's MAX", value: "3d_max"},
        {id: 1, name: "Rus tili", value: "russion"}
    ]

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
                        courseList.map(({value, id, name}) =>
                            <Option key={id} value={value}>{name}</Option>
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