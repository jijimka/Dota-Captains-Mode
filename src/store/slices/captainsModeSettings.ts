import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {SortList} from "../../models/SortList.ts";

interface captainsModeSettingsProps {
    sortBy:SortList,
    teamNames:string[],
    radiantFirst:boolean,
}

const initialState:captainsModeSettingsProps = {
    sortBy:SortList.synergy,
    teamNames:['Radiant', 'Dire'],
    radiantFirst:true
}
export const captainsModeSettings = createSlice({
    name: 'captainsModeSettings',
    initialState,
    reducers: {
        setSortBy: (state:captainsModeSettingsProps,action:PayloadAction<SortList>) => {
            state.sortBy = action.payload
        },
        setTeamNames: (state: captainsModeSettingsProps, action: PayloadAction<string[]>) => {
            state.teamNames = action.payload
        },
        setRadiantFirst: (state:captainsModeSettingsProps, action: PayloadAction<boolean>) => {
            state.radiantFirst = action.payload
        },
        resetTeamNames: (state: captainsModeSettingsProps) => {
            state.teamNames = ['Radiant', 'Dire']
        }
    }
})
export default captainsModeSettings.reducer