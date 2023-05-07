import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import Employees from "./employees";
import Rooms from "./rooms";

export default function Settings() {
    const data = [
        {
            label: "Xodimlar",
            value: "employees",
            desc: <Employees/>,
        },
        {
            label: "Xonalar",
            value: "rooms",
            desc: <Rooms/>,
        },
        {
            label: "Svelte",
            value: "svelte",
            desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
        },
    ];

    return (

        <Tabs value="rooms">
            <TabsHeader>
                {data.map(({ label, value }) => (
                    <Tab key={value} value={value}>
                        {label}
                    </Tab>
                ))}
            </TabsHeader>
            <TabsBody>
                {data.map(({ value, desc }) => (
                    <TabPanel key={value} value={value}>
                        {desc}
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    ); }
 