import React, {createElement, useEffect, useState} from 'react';
import {CabinetNavigation} from "../../config/navigation";
import {Link, useLocation, useNavigate} from "react-router-dom";

export default function Sidebar() {

    const navigate = useNavigate()
    const {pathname} = useLocation()
    const [position, setPosition] = useState(0)
    const [openToggle, setOpenToggle] = useState(false)

    const toggle = () => setOpenToggle(!openToggle)

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll)
    }, [])

    const listenToScroll = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop
        setPosition(winScroll)
    }

    return (
        <aside id="default-sidebar"
               className={`fixed top-0 pt-20 left-0 z-20 w-34 h-full border transition-transform ${!openToggle ? '-translate-x-0' : '-translate-x-full'} sm:translate-x-0 shadow-xl`}
               aria-label="Index">
            <div
                className="flex flex-col justify-between h-full px-1 py-4 overflow-y-auto dark:bg-gray-800">
                <ul className="space-y-2 font-medium">
                    {
                        CabinetNavigation.map(({navLink, title, icon, id}, key) => {
                            const isLastItem = key === CabinetNavigation.length - 1;
                            return (
                                <li key={id}>
                                    <Link to={navLink}
                                          className={`flex flex-col justify-center items-center p-2 text-gray-900 ${pathname === navLink ? 'bg-gray-100' : ''} dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 border-b`}>
                                        {createElement(icon, {
                                            className: `w-7 ${isLastItem ? "text-red-500" : ""}`,
                                            strokeWidth: 2,
                                        })}
                                        <span className="">{title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                </ul>
            </div>
        </aside>
    );
}