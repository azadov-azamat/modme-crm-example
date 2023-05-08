import {Card, Tab, TabPanel, Tabs, TabsBody, TabsHeader,} from "@material-tailwind/react";
import Archive from "./archive";
import Active from "./active";
import NewGroupAddComponent from "./new-add";
import {useState} from "react";
import PageTitle from "../../components/page-title";

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
        <div className={'flex flex-col gap-3 p-3'}>
            <PageTitle title={"Guruhlar"} toggle={toggle} isNew={true}/>
            <Card className={"gap-3 p-3"}>
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
                <NewGroupAddComponent open={open} toggle={toggle}/>
            </Card>
        </div>
    );
}
