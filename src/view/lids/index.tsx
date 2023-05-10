import {lanesDataProps, leadDataProps} from "../../interface/lids/lids.interface.ts";
import {DndContext, rectIntersection} from "@dnd-kit/core";
import KanbanLane from "./components/kanban-lane";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {addNewLeadData, deleteLeadData} from "../../redux/reducers/variable";

export default function Lids() {

    const dispatch = useDispatch()
    const {leadData} = useSelector((state: RootState) => state.variables)

    const arrayLanes: lanesDataProps[] = [
        {
            title: "So'rovlar",
            value: "requests",
            items: leadData.filter(e => e.value === "requests"),
        },
        {
            title: "Kutish",
            value: "waiting",
            items: leadData.filter(e => e.value === "waiting"),
        },
        {
            title: "To'plam",
            value: "collection",
            items: leadData.filter(e => e.value === "collection"),
        }
    ]

    return (
        <div className={"w-full h-auto"}>
            <DndContext
                collisionDetection={rectIntersection}
                onDragEnd={(e) => {
                    const container = e.over?.id || "requests";
                    const name = e.active.data.current?.name || ''
                    const phone = e.active.data.current?.phone || ''
                    const text = e.active.data.current?.text || ''

                    // const index = e.active.data.current?.index || 0
                    const parent = e.active.data.current?.parent || "requests"

                    const data: leadDataProps = {
                        value: `${container}`,
                        name, phone, text
                    }
                    console.log(leadData.filter(e => e.phone !== phone && e.value !== parent))
                    dispatch(deleteLeadData(leadData.filter(e => e.phone !== phone && e.value !== parent)))
                    dispatch(addNewLeadData(data))
                }}
            >
                <div className={'w-full flex flex-col bg-white p-3'}>
                    <div className={"flex md:flex-row flex-col justify-between w-full gap-3"}>
                        {arrayLanes.map(({title, value, items}, index) => (
                            <KanbanLane
                                key={index.toString()}
                                title={title}
                                items={items}
                                value={value}
                            />
                        ))}
                    </div>
                </div>
            </DndContext>
        </div>
    );
}