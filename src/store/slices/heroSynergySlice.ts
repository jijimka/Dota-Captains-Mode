import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import dotaHeroes from '../../../dotaHeroes.json'
import {ISynergy} from "../../types/ISynergy.ts";

interface heroSynergySliceProps {
    radiantAdvantageVs: ISynergy[],
    radiantAdvantageWith: ISynergy[],
    direAdvantageVs: ISynergy[],
    direAdvantageWith: ISynergy[],
}

const initialState:heroSynergySliceProps = {
    radiantAdvantageVs: [],
    radiantAdvantageWith: [],
    direAdvantageVs: [],
    direAdvantageWith: [],
}
function makeArray(length:number):ISynergy[] {
    const arr:ISynergy[] = [];
    for (let i = 0; i < length; i++) {
        arr.push({
            heroId2:dotaHeroes[i].id,
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
            state.radiantAdvantageVs = makeArray(dotaHeroes.length)
            state.radiantAdvantageWith = makeArray(dotaHeroes.length)
            state.direAdvantageVs = makeArray(dotaHeroes.length)
            state.direAdvantageWith = makeArray(dotaHeroes.length)
        },
        setRadiantAdvantageVsData: (state:heroSynergySliceProps,action:PayloadAction<ISynergy[]>) => {
            state.radiantAdvantageVs = action.payload
        },
        setRadiantAdvantageWithData: (state:heroSynergySliceProps,action:PayloadAction<ISynergy[]>) => {
            state.radiantAdvantageWith = action.payload
        },
        setDireAdvantageVsData: (state:heroSynergySliceProps,action:PayloadAction<ISynergy[]>) => {
            state.direAdvantageVs = action.payload
        },
        setDireAdvantageWithData: (state:heroSynergySliceProps,action:PayloadAction<ISynergy[]>) => {
            state.direAdvantageWith = action.payload
        },
    }
})
export default heroSynergySlice.reducer