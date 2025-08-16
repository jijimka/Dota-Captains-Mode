import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import dotaHeroes from '../../../dotaHeroes.json'
import {ISynergy} from "../../types/ISynergy.ts";

interface heroSynergySliceProps {
    advantageVs: ISynergy[],
    advantageWith: ISynergy[]
}

const initialState:heroSynergySliceProps = {
    advantageVs: [],
    advantageWith: []
}
function makeArray(length:number):ISynergy[] {
    const arr:ISynergy[] = [];
    for (let i = 0; i < length; i++) {
        arr.push({
            heroId:dotaHeroes[i].id,
            synergy:0
        })
    }
    return arr
}
export const heroSynergySlice = createSlice({
    name: 'heroSynergySlice',
    initialState,
    reducers: {
        initializeSynergyData: (state:heroSynergySliceProps) => {
            state.advantageVs = makeArray(dotaHeroes.length)
            state.advantageWith = makeArray(dotaHeroes.length)
        },
        setAdvantageVsData: (state:heroSynergySliceProps,action:PayloadAction<ISynergy[]>) => {
            state.advantageVs = action.payload
        },
        setAdvantageWithData: (state:heroSynergySliceProps,action:PayloadAction<ISynergy[]>) => {
            state.advantageWith = action.payload
        },
    }
})
export default heroSynergySlice.reducer