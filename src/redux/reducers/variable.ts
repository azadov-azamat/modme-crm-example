import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Dictionary} from "../../helpers/enumuration/dictionary";
import i18n from "i18next";
import {InitialStateProps} from "../../interface/redux/variable.interface";
import {
    mockAutoSms,
    mockEmployees,
    mockGroups,
    mockLanesData,
    mockLeadData,
    mockRooms,
    mockSmsTemplate,
    mockStudents,
    mockSystemRoles
} from "../../mock/data";
import {leadDataProps} from "../../interface/lids/lids.interface.ts";

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
    autoSms: mockAutoSms,
    lanesData: mockLanesData,
    leadData: mockLeadData
}

const reducers = {
    setLang: (state: InitialStateProps, action: PayloadAction<number>) => {
        const langIndex = action.payload
        state.lang = Dictionary[langIndex]
        i18n.changeLanguage(Dictionary[langIndex])
    },
    addNewLeadData: (state: InitialStateProps, action: PayloadAction<leadDataProps>) => {
        state.leadData.push(action.payload)
    },
    deleteLeadData: (state: InitialStateProps, action: PayloadAction<leadDataProps[]>) => {
        console.log(action.payload)
        state.leadData = action.payload
    }
}

export const variableSlice = createSlice({
    name: 'variable',
    initialState,
    reducers
})

export const {setLang, addNewLeadData, deleteLeadData} = variableSlice.actions;
export default variableSlice.reducer