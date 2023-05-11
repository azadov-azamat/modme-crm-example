import {useDroppable} from "@dnd-kit/core";
import KanbanCard from "./kanban-card";
import {lanesDataProps, leadDataProps} from "../../../interface/leads/leads.interface.ts";
import {ListBulletIcon, PlusCircleIcon} from "@heroicons/react/24/outline";
import {Button, IconButton, Input} from "@material-tailwind/react";
import {useState} from "react";
import {useFormik} from "formik";
import {addNewLeadData} from "../../../redux/reducers/variable";
import {useDispatch} from "react-redux";

export default function KanbanLane({title, value, items}: lanesDataProps) {

    const {setNodeRef} = useDroppable({
        id: value,
    });

    const countItems = items?.length || 0;

    return (
        <div
            className={`p-1 flex flex-col md:w-1/3 w-full min-h-[10rem] h-auto py-2 px-4 border ${countItems > 0 ? "h-auto" : "h-[10rem]"}`}>
            <div className="flex flex-col">
                <h6 className={"text-xl rounded-md p-1 font-bold mb-1 text-black"}>
                    {title}
                </h6>
                <div className="flex items-center justify-between text-sm">
                    <RequestMenu value={value}/>
                    <IconButton variant="text" color="blue-gray">
                        <ListBulletIcon width={20}/>
                    </IconButton>
                </div>
            </div>
            <div
                ref={setNodeRef}
                className={"flex flex-col p-1"}
            >
                {items?.map(({name, text, phone, value: itemValue}: leadDataProps, index: number) => (

                    <KanbanCard key={index} name={name} phone={phone} value={itemValue} text={text} index={index}
                                parent={itemValue}/>
                ))}
            </div>
        </div>
    )
}

interface RequestMenuProps {
    value: string;
}

function RequestMenu({value}: RequestMenuProps) {

    const dispatch = useDispatch()
    const [open, setOpen] = useState<boolean>(false)
    const toggle = () => setOpen(!open)

    const formik = useFormik<leadDataProps>({
        initialValues: {
            phone: "",
            name: "",
            text: "",
            value
        },
        onSubmit: (val, {resetForm}) => {
            dispatch(addNewLeadData(val))
            resetForm({values: undefined})
            toggle()
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
                    <Input label={"Ismi"} name={"name"} onChange={formik.handleChange} value={formik.values.name}/>
                </div>
                <div>
                    <Input label={"Telefon raqami"} name={"phone"} onChange={formik.handleChange} value={formik.values.phone}/>
                </div>
                <div>
                    <Input label={"Tavsif"} name={"text"} onChange={formik.handleChange} value={formik.values.text}/>
                </div>
                <div className={"hidden"}>
                    <Button type={"submit"}>Saqlash</Button>
                </div>
            </div>
        </form>
    )
}
