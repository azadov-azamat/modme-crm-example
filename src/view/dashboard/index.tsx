import {useState} from "react";
import SidebarModal from "../../components/modal/sidebar";

export default function Dashboard() {

    const [open, setOpen] = useState(false)
    const toggle = () => setOpen(!open)

    return (
        <div>
            <button
                onClick={toggle}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                type="button" data-drawer-target="drawer-example" data-drawer-show="drawer-example"
                aria-controls="drawer-example">

               Sidebar component
            </button>

            <SidebarModal title={'Sidebar'} open={open} toggle={toggle}>

            </SidebarModal>
        </div>
    );
}