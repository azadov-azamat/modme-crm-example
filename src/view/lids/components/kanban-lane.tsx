import {useDroppable} from "@dnd-kit/core";
import KanbanCard from "./kanban-card";
import {arrayDataProps, arrayLanesProps} from "../../../interface/lids/lids.interface.ts";
import {ListBulletIcon, PlusCircleIcon} from "@heroicons/react/24/outline";
import {Button, IconButton, Input} from "@material-tailwind/react";
import {useState} from "react";
import {useFormik} from "formik";

interface KanbanLaneProps extends arrayLanesProps {
    deleteItem: any;
    addNewCard: any;
}

export default function KanbanLane({title, value, items, deleteItem, addNewCard}: KanbanLaneProps) {

    const {setNodeRef} = useDroppable({
        id: value,
    });

    const countItems = items?.length || 0;

    function RequestMenu() {

        const [open, setOpen] = useState<boolean>(false)
        const toggle = () => setOpen(!open)

        const formik = useFormik<arrayDataProps>({
            initialValues: {
                phone: "",
                name: "",
                text: "",
                value
            },
            onSubmit: (val) => {
                addNewCard(val)
            }
        })


        return (
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <Button className="flex items-center gap-2 p-2" variant="text" color="blue-gray" onClick={toggle}>
                        <PlusCircleIcon width={20}/>
                        <span>So'rov qo'shish</span>
                    </Button>
                </div>
                <div
                    className={`fixed ${open ? "block" : "hidden"} p-2 flex flex-col items-center gap-2 bg-white rounded-lg`}>
                    <div className={"flex items-center"}>
                        <Input label={"Ismi"} name={"name"} onChange={formik.handleChange}/>
                    </div>
                    <div>
                        <Input label={"Telefon raqami"} name={"phone"} onChange={formik.handleChange}/>
                    </div>
                    <div>
                        <Input label={"Tavsif"} name={"text"} onChange={formik.handleChange}/>
                    </div>
                    <div className={"hidden"}>
                        <Button type={"submit"}>Saqlash</Button>
                    </div>
                </div>
            </form>
        )
    }

    return (
        <div className={`p-1 flex flex-col md:w-1/3 w-full min-h-[10rem] h-auto py-2 px-4 border ${countItems > 0 ? "h-auto" : "h-[10rem]"}`}>
            <div className="flex flex-col">
                <h6 className={"text-xl rounded-md p-1 font-bold mb-1 text-black"}>
                    {title}
                </h6>
                <div className="flex items-center justify-between text-sm">
                    <RequestMenu/>
                    <IconButton variant="text" color="blue-gray">
                        <ListBulletIcon width={20}/>
                    </IconButton>
                </div>
            </div>
            <div
                ref={setNodeRef}
                className={"flex flex-col p-1"}
            >
                {items.map(({name, text, phone, value: itemValue}: arrayDataProps, index: number) => (

                    <KanbanCard name={name} phone={phone} value={itemValue} text={text} index={index} parent={itemValue}
                                deleteItem={deleteItem}/>
                ))}
            </div>
        </div>
    )
}