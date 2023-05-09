import {useSelector} from "react-redux";
import {Card} from "@material-tailwind/react";
import {RootState} from "../../../redux/store";
import {smsTemplateProps} from "../../../interface/redux/variable.interface";
import PageTitle from "../../../components/page-title";
import TableComponent from "../../../components/table";
import {ModalInterfaceProps} from "../../../interface/modal/modal.interface";
import {PencilIcon, TrashIcon} from "@heroicons/react/24/outline";

export default function SmsTemplate({toggle}: ModalInterfaceProps) {

    // const query = qs.parse(location.search, {ignoreQueryPrefix: true})
    const {smsTemplates} = useSelector((state: RootState) => state.variables)

    const basicColumns: any = [
        {
            name: 'Nomi',
            width: 'auto',
            wrap: false,
            selector: (row: smsTemplateProps) => row.text
        },
        {
            name: "Amallar",
            width: '150px',
            wrap: true,
            cell: (row: smsTemplateProps) => <div className={"flex gap-3"}>
                <PencilIcon color={'orange'} className={"cursor-pointer"} width={25}
                            onClick={() => console.log(row.id)}/>
                <TrashIcon color={'red'} className={"cursor-pointer"} width={25} onClick={() => console.log(row.id)}/>
            </div>
        }
    ]

    const total_count = 234;
    const current_page = 1;
    const count_item = 20

    return (
        <div className={"flex flex-col p-3 gap-3"}>
            <PageTitle title={"SMS shablonlar"} toggle={toggle} isNew={true}/>
            <Card className={"p-2"}>
                <TableComponent data={smsTemplates}
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