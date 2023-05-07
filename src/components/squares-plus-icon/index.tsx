import {Menu, MenuHandler, MenuItem, MenuList} from "@material-tailwind/react";
import {createElement} from "react";
import {SquaresPlusIcon} from "@heroicons/react/24/outline";
import {Dictionary} from "../../helpers/enumuration/dictionary";

export default function SquaresPlusIconComponent() {

    return (
        <Menu>
            <MenuHandler>
                {createElement(SquaresPlusIcon, {
                    className: `w-6 cursor-pointer`,
                    strokeWidth: 1,
                })}
            </MenuHandler>
            <MenuList className="flex flex-col items-center gap-2">
               <span className={'flex items-center gap-2 border-none'}>
                    {Object.values(Dictionary).filter((v) => !isNaN(Number(v))).map(key => (
                        <MenuItem key={key}>
                            {Dictionary[Number(key)]}
                            <span></span>
                        </MenuItem>
                    ))}
               </span>
                {/*<Typography variant="small" color="gray" className="font-normal font-bold border-none">*/}
                {/*    Filialni tanlang:*/}
                {/*</Typography>*/}
                {/*<MenuItem className="flex items-center gap-4 py-2 pr-8 pl-2">*/}
                {/*    <Avatar*/}
                {/*        variant="circular"*/}
                {/*        alt="natali craig"*/}
                {/*        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"*/}
                {/*    />*/}
                {/*</MenuItem>*/}
                {/*<MenuItem className="flex items-center gap-4 py-2 pr-8 pl-2">*/}
                {/*    <Avatar*/}
                {/*        variant="circular"*/}
                {/*        alt="paypal"*/}
                {/*        src="https://dwglogo.com/wp-content/uploads/2016/08/PayPal_Logo_Icon.png"*/}
                {/*    />*/}
                {/*</MenuItem>*/}
            </MenuList>
        </Menu>
    )
}