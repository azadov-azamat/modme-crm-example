import {Button, Card, Tab, TabPanel, Tabs, TabsBody, TabsHeader, Typography,} from "@material-tailwind/react";
import Archive from "./archive";
import Active from "./active";
import NewAddComponent from "./new-add";
import {useState} from "react";

export default function Groups() {

    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open)

    const data = [
        {
            label: "Active",
            value: "active",
            desc: <Active/>,
        },
        {
            label: "Archive",
            value: "archive",
            desc: <Archive/>,
        }
    ];

    return (
        <Card className={"p-3 gap-3"}>
            <div className="w-full h-auto flex justify-between items-center">
                <Typography
                    variant="h4"
                >
                    Guruhlar
                </Typography>
                <Button onClick={toggle}>Yangisini qo'shish</Button>
            </div>
            <Tabs value="active">
                <TabsHeader>
                    {data.map(({label, value}) => (
                        <Tab key={value} value={value}>
                            {label}
                        </Tab>
                    ))}
                </TabsHeader>
                <TabsBody>
                    {data.map(({value, desc}) => (
                        <TabPanel key={value} value={value}>
                            {desc}
                        </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>
            <NewAddComponent open={open} toggle={toggle}/>
        </Card>
    );
}
