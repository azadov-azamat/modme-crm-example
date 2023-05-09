// Davomat paneli
import {Typography} from "@material-tailwind/react";
import {StudentsTableProps} from "../../interface/groups/groups-in.interface";
import {MinusCircleIcon, PlusCircleIcon, XCircleIcon} from "@heroicons/react/24/outline";

export default function AttendanceComponent({students}: StudentsTableProps) {

    const TABLE_HEAD = ["Name", "kelmadi", "boredi", "null"];

    {/*const data = [*/}
    {/*    {*/}
    {/*        id: 1,*/}
    {/*        name: "Sanobar",*/}
    {/*        studyDay: {*/}
    {/*            yan: {*/}
    {/*                1: true,*/}
    {/*                2: true,*/}
    {/*                3: false,*/}
    {/*                4: true,*/}
    {/*                5: false,*/}
    {/*                6: false,*/}
    {/*                7: null,*/}
    {/*                8: null,*/}
    {/*            },*/}
    {/*            fev: {*/}
    //                 1: null,
    //                 2: null,
    {/*                3: null,*/}
    {/*                4: null,*/}
    {/*                5: null,*/}
    {/*                6: null,*/}
    {/*                7: null,*/}
    //                 8: null
    //             },
    //         }
    //     },
    {/*    {*/}
    {/*        id: 2,*/}
    {/*        name: "Omadbek",*/}
    {/*        studyDay: {*/}
    {/*            yan: {*/}
    //                 1: true,
    //                 2: true,
    //                 3: true,
    //                 4: true,
    {/*                5: false,*/}
    //                 6: true,
    //                 7: null,
    //                 8: null,
    {/*            },*/}
    {/*            fev: {*/}
    {/*                1: null,*/}
    //                 2: null,
    //                 3: null,
    //                 4: null,
    //                 5: null,
    //                 6: null,
    //                 7: null,
    //                 8: null
    //             },
    //         }
    //     },
    //     {
    //         id: 3,
    //         name: "Nodir",
    //         studyDay: {
    //             yan: {
    //                 1: false,
    {/*                2: true,*/}
    //                 3: true,
    //                 4: true,
    //                 5: true,
    //                 6: false,
    //                 7: null,
    //                 8: null,
    //             },
    //             fev: {
    //                 1: null,
    //                 2: null,
    //                 3: null,
    //                 4: null,
    //                 5: null,
    //                 6: null,
    //                 7: null,
    //                 8: null
    //             },
    //         }
    //     }
    // ]

    return (
        <div className={'w-full border bg-white shadow-lg p-2'}>
            <h4 className={'font-bold py-3'}>Davomat</h4>
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
                        students?.map((item, key) =>
                            <tr key={key}>
                                <td>
                                    {item?.name}
                                </td>
                                <td>
                                    <MinusCircleIcon width={30}/>
                                </td>
                                <td>
                                    <PlusCircleIcon width={30}/>
                                </td>
                                <td>
                                    <XCircleIcon width={30}/>
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