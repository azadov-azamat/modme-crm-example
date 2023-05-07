import React, {createElement, useState} from 'react';
import {Avatar, Button, Input, Menu, MenuHandler, MenuItem, MenuList, Typography} from "@material-tailwind/react";
import {
    ArrowsPointingInIcon,
    ArrowsPointingOutIcon,
    ChevronDownIcon,
    Cog6ToothIcon,
    InboxArrowDownIcon,
    LifebuoyIcon,
    MagnifyingGlassIcon,
    PowerIcon,
    UserCircleIcon,
} from "@heroicons/react/24/outline";
import {useNavigate} from "react-router-dom";
import toggleFullScreen from "../../config/constants";
import SquaresPlusIconComponent from "../squares-plus-icon";

export default function NavbarComponent() {

    const navigate = useNavigate()
    const [screen, setScreen] = useState(false)

    const toggleScreen = () => setScreen(!screen)

    const profileMenuItems = [
        {
            label: "My Profile",
            icon: UserCircleIcon,
            onClick: () => console.log("this.label")
        },
        {
            label: "Edit Profile",
            icon: Cog6ToothIcon,
            onClick: () => console.log("this.label")
        },
        {
            label: "Inbox",
            icon: InboxArrowDownIcon,
            onClick: () => console.log("this.label")
        },
        {
            label: "Help",
            icon: LifebuoyIcon,
            onClick: () => console.log("this.label")
        },
        {
            label: "Sign Out",
            icon: PowerIcon,
            onClick: () => navigate('/login')
        },
    ];

    function ProfileMenu() {
        const [isMenuOpen, setIsMenuOpen] = React.useState(false);
        // const closeMenu = () => setIsMenuOpen(false);

        return (
            <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
                <MenuHandler>
                    <Button
                        variant="text"
                        color="blue-gray"
                        className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                    >
                        <Avatar
                            variant="circular"
                            size="sm"
                            alt="candice wu"
                            className="border border-blue-500 p-0.5"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                        />
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`h-3 w-3 transition-transform ${
                                isMenuOpen ? "rotate-180" : ""
                            }`}
                        />
                    </Button>
                </MenuHandler>
                <MenuList className="p-1">
                    {profileMenuItems.map(({label, onClick, icon}, key) => {
                        const isLastItem = key === profileMenuItems.length - 1;
                        return (
                            <MenuItem
                                key={label}
                                onClick={onClick}
                                className={`flex items-center gap-2 rounded ${
                                    isLastItem
                                        ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                                        : ""
                                }`}
                            >
                                {createElement(icon, {
                                    className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                                    strokeWidth: 2,
                                })}
                                <Typography
                                    as="span"
                                    variant="small"
                                    className="font-normal"
                                    color={isLastItem ? "red" : "inherit"}
                                >
                                    {label}
                                </Typography>
                            </MenuItem>
                        );
                    })}
                </MenuList>
            </Menu>
        );
    }

    return (
        <nav className={"fixed z-40 bg-white w-full sm:h-20 h-16 py-2 px-2 md:px-8 flex justify-between items-center border shadow-md"}>
            <div className="search w-80 md:flex hidden">
                <Input className={'rounded rounded-full'} label="Qidiruv" icon={createElement(MagnifyingGlassIcon, {
                    className: `w-5`,
                    strokeWidth: 2,
                })}/>
            </div>
            <div className="logo w-auto sm:h-20 h-14 sm:py-4 py-2">
                <img
                    className="h-full w-full"
                    src="https://teachapply.com/demo/images/Demo-School-4.png"
                    alt="nature image"
                />
            </div>
            <div className="navigation p-4 flex gap-5">
                <div className="flex items-center gap-2">
                    <SquaresPlusIconComponent/>
                    {createElement(!screen ? ArrowsPointingOutIcon : ArrowsPointingInIcon, {
                        className: `w-6 cursor-pointer hidden md:flex`,
                        strokeWidth: 1,
                        onClick: () => {
                            toggleScreen()
                            toggleFullScreen()
                        }
                    })}
                </div>
                <ProfileMenu/>
            </div>
        </nav>
    );
}