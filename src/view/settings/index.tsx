import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import Employees from "./employees";
import Rooms from "./rooms";
import NewEmployeesAddComponent from "./employees/new-add";
import {useState} from "react";
import NewRoomAddComponent from "./rooms/new-add";
import SmsTemplate from "./sms-template";
import NewSmsTemplateAddComponent from "./sms-template/new-add";
import AutoSmsComponent from "./auto-sms";

export default function Settings() {

    const [openEmployees, setOpenEmployees] = useState(false);
    const [openRoom, setOpenRoom] = useState(false);
    const [openTemplate, setOpenTemplate] = useState(false);

    const toggleTemplate = () => setOpenTemplate(!openTemplate)
    const toggleRoom = () => setOpenRoom(!openRoom)
    const toggleEmployees = () => setOpenEmployees(!openEmployees)

    const data = [
        {
            label: "Xodimlar",
            value: "employees",
            desc: <Employees toggle={toggleEmployees} open={openEmployees}/>,
        },
        {
            label: "Xonalar",
            value: "rooms",
            desc: <Rooms open={openRoom} toggle={toggleRoom}/>,
        },
        {
            label: "Avto-sms",
            value: "auto_sms",
            desc: <AutoSmsComponent/>,
        },
        {
            label: "SMS shablonlar",
            value: "sms_template",
            desc: <SmsTemplate open={openTemplate} toggle={toggleTemplate}/>,
        }
    ];

    return (

        <Tabs value="employees">
            <TabsHeader className={"flex flex-col md:flex-row"}>
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
            <NewEmployeesAddComponent open={openEmployees} toggle={toggleEmployees}/>
            <NewRoomAddComponent open={openRoom} toggle={toggleRoom}/>
            <NewSmsTemplateAddComponent open={openTemplate} toggle={toggleTemplate}/>
        </Tabs>
    ); }
 