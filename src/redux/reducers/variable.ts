import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Dictionary} from "../../helpers/enumuration/dictionary";
import i18n from "i18next";
import {InitialStateProps} from "../../interface/redux/variable.interface";
import {
    mockAutoSms,
    mockEmployees,
    mockGroups,
    mockRooms,
    mockSmsTemplate,
    mockStudents,
    mockSystemRoles
} from "../../mock/data";

const initialState: InitialStateProps = {
    lang: localStorage.getItem('i18nextLng') || 'ru',
    loading: false,
    groups: mockGroups,
    students: mockStudents,
    studentGroup: null,
    employees: mockEmployees,
    roles: mockSystemRoles,
    rooms: mockRooms,
    smsTemplates: mockSmsTemplate,
    autoSms: mockAutoSms
}

const reducers = {
    setLang: (state: InitialStateProps, action: PayloadAction<number>) => {
        const langIndex = action.payload
        state.lang = Dictionary[langIndex]
        i18n.changeLanguage(Dictionary[langIndex])
    }
}

export const variableSlice = createSlice({
    name: 'variable',
    initialState,
    reducers
})

export const {setLang} = variableSlice.actions;
export default variableSlice.reducer