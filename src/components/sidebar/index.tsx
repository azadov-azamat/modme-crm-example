import React, {createElement} from 'react';
import {CabinetNavigation} from "../../config/navigation";
import {Link, useLocation} from "react-router-dom";
import {Card, Tooltip} from "@material-tailwind/react";

export default function Sidebar() {

    const {pathname} = useLocation()
    // const [position, setPosition] = useState(0)
    // const [openToggle, setOpenToggle] = useState(false)

    // const toggle = () => setOpenToggle(!openToggle)

    // useEffect(() => {
    //     window.addEventListener('scroll', listenToScroll)
    // }, [])

    // const listenToScroll = () => {
    //     const winScroll = document.body.scrollTop || document.documentElement.scrollTop
    //     setPosition(winScroll)
    // }

    return (
        <Card
            className="fixed md:top-20 top-16 left-0 z-20 h-[calc(100vh-2rem)] w-full md:max-w-[10rem] max-w-[6rem] rounded-none shadow-xl shadow-blue-gray-900/5">
            <div
                className="flex flex-col justify-between h-full px-1 py-4 overflow-y-auto dark:bg-gray-800">
                <ul className="space-y-2 font-medium">
                    {
                        CabinetNavigation.map(({navLink, title, icon, id}, key) => {
                            const isLastItem = key === CabinetNavigation.length - 1;
                            return (
                                <li key={id}>
                                    {
                                        <Link to={navLink}
                                              className={`flex flex-col justify-center items-center p-2 text-center text-gray-900 ${pathname === navLink ? 'bg-gray-100' : ''} dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 border-b`}>
                                            {createElement(icon, {
                                                className: `w-7 hidden md:flex ${isLastItem ? "text-red-500" : ""}`,
                                                strokeWidth: pathname === navLink ? 2 : 1,
                                            })}
                                          <div className="flex md:hidden">
                                              <Tooltip content={title} placement="right">
                                                  {createElement(icon, {
                                                      className: `w-7 ${isLastItem ? "text-red-500" : ""}`,
                                                      strokeWidth: pathname === navLink ? 2 : 1,
                                                  })}
                                              </Tooltip>
                                          </div>
                                            <span className={"hidden md:flex"}>{title}</span>
                                        </Link>
                                    }
                                </li>
                            )
                        })}
                </ul>
            </div>
        </Card>
    );
}