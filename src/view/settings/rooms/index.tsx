import {useSelector} from "react-redux";
import {Card} from "@material-tailwind/react";
import {RootState} from "../../../redux/store";
import {roomsProps} from "../../../interface/redux/variable.interface";
import PageTitle from "../../../components/page-title";
import TableComponent from "../../../components/table";
import {ModalInterfaceProps} from "../../../interface/modal/modal.interface";

export default function Rooms({toggle}: ModalInterfaceProps) {

    // const query = qs.parse(location.search, {ignoreQueryPrefix: true})
    const {rooms} = useSelector((state: RootState) => state.variables)

    const basicColumns: any = [
        {
            name: "Id",
            width: '50px',
            wrap: true,
            selector: (row: roomsProps) => row.id
        },
        {
            name: 'Nomi',
            width: '200px',
            wrap: true,
            selector: (row: roomsProps) => row.name
        }
    ]

    const total_count = 234;
    const current_page = 1;
    const count_item = 20

    return (
        <div className={"flex flex-col p-3 gap-3"}>
            <PageTitle title={"Xonalar"} toggle={toggle} isNew={true}/>
            <Card className={"p-2"}>
                <TableComponent data={rooms}
                                columns={basicColumns}
                                totalPages={Math.ceil(total_count / 15)}
                                currentPage={current_page}
                                size={count_item}
                                totalCount={total_count}
                />
            </Card>
        </div>
    );
}