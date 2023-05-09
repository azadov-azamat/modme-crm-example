import {useDraggable} from "@dnd-kit/core";
import {CSS} from "@dnd-kit/utilities";
import {EllipsisVerticalIcon, TrashIcon} from "@heroicons/react/24/outline";
import {Tooltip} from "@material-tailwind/react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {deleteLeadData} from "../../../redux/reducers/variable";


interface KanbanCardProps {
    name: string;
    value: string;
    phone: string;
    text: string;
    index: number;
    parent: string;
}

export default function KanbanCard({name, phone, text, value, parent, index}: KanbanCardProps) {

    const dispatch = useDispatch()
    const {leadData} = useSelector((state: RootState) => state.variables)

    function deleteItem() {
        dispatch(deleteLeadData(leadData.filter(e => e.phone !== phone && e.value !== parent)))
    }

    // @ts-ignore
    const {attributes, listeners, setNodeRef, transform, transition} = useDraggable({
        id: `card-${name}`,
        data: {
            name,
            index,
            value,
            parent,
            text,
            phone
        }
    });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            onClick={deleteItem}
            className={'bg-white p-1 mt-1 shadow-md rounded-md w-full h-auto flex flex-col items-center justify-center cursor-grab border'}
        >
            <div className={"w-full h-auto flex items-center justify-between p-2"}>
                <div className="flex items-center">
                    <Tooltip content={text} placement={"top"} className={"cursor-pointer"}>
                        <EllipsisVerticalIcon width={20}/>
                    </Tooltip>
                    {name} / {phone}
                </div>
                <div className="">
                    <TrashIcon className={"text-red cursor-pointer"} width={20}
                               onClick={deleteItem}/>
                </div>
            </div>
        </div>
    );
}