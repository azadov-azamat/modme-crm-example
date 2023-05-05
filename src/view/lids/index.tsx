import SidebarModal from "../../components/modal/sidebar";
import {useState} from "react";

export default function Lids() {

    const [open, setOpen] = useState(false)
    const toggle = () => setOpen(!open)

    return (
        <div>
            Lids
            <div className="text-center">
                <button
                    onClick={toggle}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    type="button" data-drawer-target="drawer-example" data-drawer-show="drawer-example"
                    aria-controls="drawer-example">

                    Show drawer
                </button>
            </div>
            <SidebarModal title={'sdf'} open={open} toggle={toggle}>

            </SidebarModal>
        </div>
    );
}