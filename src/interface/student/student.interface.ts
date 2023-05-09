import {studentProps} from "../redux/variable.interface";
import React from "react";

export interface StudentInterfaceProps {
    student?: studentProps;
}

export interface NewCourseAddComponentProps {
    open: boolean;
    toggle: React.MouseEventHandler<HTMLButtonElement>;
}