import {Switch, Typography} from "@material-tailwind/react";
import React from "react";
import {CursorArrowRaysIcon} from "@heroicons/react/24/outline";

interface SmsSwitchComponentProps {
    text: string;
    id: number;
    checked: boolean;
    clicked: React.MouseEventHandler<HTMLButtonElement>;
}
export default function SmsSwitchComponent({text, checked, id, clicked}: SmsSwitchComponentProps) {
    return (
        <div key={id} className={'flex items-center justify-between p-3 bg-white shadow-lg rounded-lg w-auto h-14'}>
            <Typography variant="small" color="gray" className="font-normal flex gap-2 cursor-pointer" onClick={clicked}>
                {text}
                <CursorArrowRaysIcon width={20}/>
            </Typography>
            <Switch id={text} defaultChecked={checked}/>
        </div>
    );
}