import {useState} from "react";
import {arrayDataProps, arrayLanesProps} from "../../interface/lids/lids.interface.ts";
import {DndContext, rectIntersection} from "@dnd-kit/core";
import KanbanLane from "./components/kanban-lane";

export default function Lids() {

    const [requestItems, setRequestItems] = useState<arrayDataProps[]>([])
    const [collectionItems, setCollectionItems] = useState<arrayDataProps[]>([])
    const [waitingItems, setWaitingItems] = useState<arrayDataProps[]>([])

    const arrayLanes: arrayLanesProps[] = [
        {
            title: "So'rovlar",
            value: "requests",
            items: requestItems,
            color: "red"
        },
        {
            title: "Kutish",
            value: "waiting",
            items: waitingItems,
            color: "yellow"
        },
        {
            title: "To'plam",
            value: "collection",
            items: collectionItems,
            color: "green"
        }
    ]

    const addNewCard = (data: arrayDataProps) => {
        if (data.value === "requests") {
            setRequestItems([...requestItems, {...data}]);
        } else if (data.value === "waiting") {
            setWaitingItems([...waitingItems, {...data}]);
        } else {
            setCollectionItems([...collectionItems, {...data}]);
        }
    }

    const deleteCard = (parent: string, phone: string) => {
        if (parent === "requests") {
            const ArrayData = requestItems.filter(item => item.phone !== phone)
            setRequestItems(ArrayData);
        } else if (parent === "waiting") {
            const ArrayData = waitingItems.filter(item => item.phone !== phone)
            setWaitingItems(ArrayData);
        } else {
            const ArrayData = collectionItems.filter(item => item.phone !== phone)
            setCollectionItems(ArrayData);
        }
    }

    return (
        <div className={"w-full h-auto"}>
            <DndContext
                collisionDetection={rectIntersection}
                onDragEnd={(e) => {
                    const container = e.over?.id;
                    const name = e.active.data.current?.name || ''
                    const phone = e.active.data.current?.phone || ''
                    const text = e.active.data.current?.text || ''

                    const index = e.active.data.current?.index || 0
                    const parent = e.active.data.current?.parent || "requests"

                    if (container === "requests") {
                        setRequestItems([...requestItems, {name, phone, text, value: "requests"}]);
                    } else if (container === "waiting") {
                        setWaitingItems([...waitingItems, {name, phone, text, value: "waiting"}]);
                    } else {
                        setCollectionItems([...collectionItems, {name, phone, text, value: "collection"}]);
                    }

                    if (parent === "requests") {
                        setRequestItems([
                            ...requestItems.slice(0, index),
                            ...requestItems.slice(index + 1),
                        ]);
                    } else if (parent === "waiting") {
                        setWaitingItems([
                            ...waitingItems.slice(0, index),
                            ...waitingItems.slice(index + 1),
                        ]);
                    } else {
                        setCollectionItems([
                            ...collectionItems.slice(0, index),
                            ...collectionItems.slice(index + 1),
                        ]);
                    }
                }}
            >
                <div className={'w-full flex flex-col bg-white p-3'}>
                    <div className={"flex justify-between w-full gap-3"}>
                        {arrayLanes.map(({title, value, items, color}, index) => (
                            <KanbanLane
                                key={index}
                                title={title}
                                items={items}
                                color={color}
                                addNewCard={addNewCard}
                                deleteItem={deleteCard}
                                value={value}
                            />
                        ))}
                    </div>
                </div>
            </DndContext>
        </div>
    );
}