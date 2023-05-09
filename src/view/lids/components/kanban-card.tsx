import {useDraggable} from "@dnd-kit/core";
import {CSS} from "@dnd-kit/utilities";
import {TrashIcon} from "@heroicons/react/24/outline";


interface KanbanCardProps {
    name: string;
    value: string;
    phone: string;
    text: string;
    index: number;
    parent: string;
    deleteItem: any
}

export default function KanbanCard({name, phone, text, value, parent, index, deleteItem}: KanbanCardProps) {

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
            className={'bg-white p-1 mt-1 shadow-md rounded-md w-full h-auto flex flex-col items-center justify-center cursor-grab border'}
        >
            <div className={"w-full h-auto flex items-center justify-between p-2"}>
                <div className="">
                    {name} / {phone}
                </div>
                <div className="">
                    <TrashIcon className={"text-red-600 text-2xl cursor-pointer"} onClick={() => deleteItem(parent, phone)}/>
                </div>
            </div>
        </div>
    );
}