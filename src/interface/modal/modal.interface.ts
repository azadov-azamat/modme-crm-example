import React from "react";

export interface ModalInterfaceProps {
    open: boolean;
    toggle: React.MouseEventHandler<HTMLButtonElement>;
}