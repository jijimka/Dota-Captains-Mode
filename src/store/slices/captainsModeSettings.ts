import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {SortList} from "../../models/SortList.ts";

interface captainsModeSettingsProps {
    sortBy:SortList,
}

const initialState:captainsModeSettingsProps = {
    sortBy:SortList.synergy,
}
export const captainsModeSettings = createSlice({
    name: 'captainsModeSettings',
    initialState,
    reducers: {
        setSortBy: (state:captainsModeSettingsProps,action:PayloadAction<SortList>) => {
            state.sortBy = action.payload
        },
    }
})
export default captainsModeSettings.reducer