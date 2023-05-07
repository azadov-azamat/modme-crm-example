import {PencilIcon} from "@heroicons/react/24/solid";
import {Button, Card, CardBody, CardFooter, IconButton, Tooltip, Typography,} from "@material-tailwind/react";

const TABLE_HEAD = ["Id", "Name", "Teacher", "Time", "Days", "action"];

const TABLE_ROWS = [
    {
        id: "11581",
        name: "Rus tili",
        teacher: "Malika Sh.",
        time: "3:30pm",
        days: "Boshqa",
    },
    {
        id: "11580",
        name: "SMM",
        teacher: "Ms. Ezoza",
        time: "3:30pm",
        days: "Boshqa",
    },
    {
        id: "...",
        name: "3D's MAX",
        teacher: "Mr. Sherzod",
        time: "4:00pm",
        days: "Boshqa",
    },
    {
        id: "team",
        name: "Motion Grafika",
        teacher: "Ms. Ezoza",
        time: "11:00am",
        days: "Boshqa",
    },
    {
        id: "team",
        name: "Motion Grafika",
        teacher: "Ms. Ezoza",
        time: "11:00am",
        days: "Boshqa",
    },
    {
        id: "11532",
        name: "Arab tili",
        teacher: "Mr. Ismoil",
        time: "10:00am",
        days: "Juft kunlar",
    },
    {
        id: "Malika individual",
        name: "3D's MAX",
        teacher: "Mr. Sherzod",
        time: "7:00pm",
        days: "Boshqa",
    },
    {
        id: "11523",
        name: "3D's MAX",
        teacher: "Mr. Sherzod",
        time: "3:30pm",
        days: "Boshqa",
    }
];

export default function Active() {
    return (
        <Card className="h-auto w-3/5">
            <CardBody className="overflow-scroll px-0">
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
                    {TABLE_ROWS.map(
                        ({teacher, id, time, days, name}, index) => {
                            const isLast = index === TABLE_ROWS.length - 1;
                            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                            return (
                                <tr key={name}>
                                    <td className={classes}>
                                        <Typography variant="small" color="blue-gray" className="font-bold">
                                            {id}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {name}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {teacher}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {time}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {days}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Tooltip content="O'zgartirish kiritish">
                                            <IconButton variant="text" color="blue-gray">
                                                <PencilIcon className="h-4 w-4"/>
                                            </IconButton>
                                        </Tooltip>
                                    </td>
                                </tr>
                            );
                        },
                    )}
                    </tbody>
                </table>
            </CardBody>
            <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                <Button variant="outlined" color="blue-gray" size="sm">
                    Previous
                </Button>
                <div className="flex items-center gap-2">
                    <IconButton variant="outlined" color="blue-gray" size="sm">
                        1
                    </IconButton>
                    <IconButton variant="text" color="blue-gray" size="sm">
                        2
                    </IconButton>
                    <IconButton variant="text" color="blue-gray" size="sm">
                        3
                    </IconButton>
                    <IconButton variant="text" color="blue-gray" size="sm">
                        ...
                    </IconButton>
                    <IconButton variant="text" color="blue-gray" size="sm">
                        8
                    </IconButton>
                    <IconButton variant="text" color="blue-gray" size="sm">
                        9
                    </IconButton>
                    <IconButton variant="text" color="blue-gray" size="sm">
                        10
                    </IconButton>
                </div>
                <Button variant="outlined" color="blue-gray" size="sm">
                    Next
                </Button>
            </CardFooter>
        </Card>
    );
}