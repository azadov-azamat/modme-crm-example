import React from "react";

export interface CabinetNavigationProps {
    id: number,
    title: string;
    icon: React.ReactElement<HTMLOrSVGImageElement>;
    navLink: string;
}