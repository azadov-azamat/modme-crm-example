// Chegirmalar

import {Input, Typography} from "@material-tailwind/react";
import {StudentsTableProps} from "../../interface/groups/groups-in.interface";

export default function AttendanceComponent({students}: StudentsTableProps) {

    const TABLE_HEAD = ["Name", "Phone", "Individual narx"];
    const classes = "p-2 border-b border-blue-gray-50"

    return (
        <div className={'w-full border bg-white shadow-lg p-2'}>
            <h4 className={'font-bold py-3'}>Chegirmalar</h4>
            <div className="">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                    <tr>
                        {TABLE_HEAD.map((head) => (
                            <th key={head} className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal leading-none opacity-70"
                                >
                                    {head}
                                </Typography>
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {
                        students?.map(({name, phone}, key) =>
                            <tr key={key}>
                                <td className={classes}>
                                    {name}
                                </td>
                                <td className={classes}>
                                    {phone}
                                </td>
                                <td className={classes}>
                                    <Input
                                        label={"narx kiriting"}
                                        id={"phone"}
                                        name={"phone"}
                                    />
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
}