import {Switch, Typography} from "@material-tailwind/react";

interface SmsSwitchComponentProps {
    text: string;
}
export default function SmsSwitchComponent({text}: SmsSwitchComponentProps) {
    return (
        <div className={'flex items-center justify-between p-3 bg-white shadow-lg rounded-lg w-64 h-14'}>
            <Typography variant="small" color="gray" className="font-normal">
                {text}
            </Typography>
            <Switch />
        </div>
    );
}