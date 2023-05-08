import {Button, Typography} from "@material-tailwind/react";
import React from "react";

interface PageTitleProps {
    title: string;
    isNew: boolean
    toggle?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function PageTitle({title, toggle, isNew = false}: PageTitleProps) {
    return (
        <div className="w-full p-3 h-auto flex justify-between items-center border-b-2 border-white">
            <Typography
                variant="h4"
            >
                {title}
            </Typography>
            {isNew && <Button onClick={toggle}>Yangisini qo'shish</Button>}
        </div>
    );
}