import {createElement} from 'react';
import {QuestionMarkCircleIcon, UserIcon} from "@heroicons/react/24/outline";
import {Typography} from "@material-tailwind/react";

export default function FooterComponent() {
    return (
        <footer
            className={'fixed flex justify-between items-center bottom-0 left-0 right-0 z-10 border bg-white w-auto h-14 py-4 px-10 ml-10 md:ml-28'}>
            <div className="support flex items-center gap-4">
                <span className="support flex gap-1 cursor-pointer">
                       {createElement(UserIcon, {
                           className: `w-5`,
                           strokeWidth: 1,
                       })}
                    <Typography
                        as="span"
                        variant="small"
                        className="font-normal hidden sm:grid"
                        color={"inherit"}
                    >
                                  Texnik yordam
                                </Typography>
                </span>
                <span className="support flex gap-1 cursor-pointer">
                       {createElement(QuestionMarkCircleIcon, {
                           className: `w-5`,
                           strokeWidth: 1,
                       })}
                    <Typography
                        as="span"
                        variant="small"
                        className="font-normal hidden sm:grid"
                        color={"inherit"}
                    >
                                Hujjatlar
                                </Typography>
                </span>
            </div>
            <div className="ceo-logo h-20 py-4 cursor-pointer">
                <img
                    className="h-full w-full w-auto h-full"
                    src="https://static.tildacdn.com/tild6663-3737-4035-a365-643866313432/Green_Illustrated_Vi.png"
                    alt="nature image"
                />
            </div>
        </footer>
    );
}