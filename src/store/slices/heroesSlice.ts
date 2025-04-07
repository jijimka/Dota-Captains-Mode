import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IHeroes} from "../../types/IHeroes.ts";

interface heroesSliceProps {
    agiHeroes: IHeroes[];
    uniHeroes: IHeroes[];
    strHeroes: IHeroes[];
    intHeroes: IHeroes[];
}

const initialState:heroesSliceProps = {
    agiHeroes:[],
    intHeroes:[],
    strHeroes:[],
    uniHeroes:[],
}
export const heroesSlice = createSlice({
    name: 'heroesSlice',
    initialState,
    reducers: {
        addIntHeroes(state, action:PayloadAction<IHeroes[]>) {
            state.intHeroes = action.payload;
        },
        addStrHeroes(state, action:PayloadAction<IHeroes[]>) {
            state.strHeroes = action.payload;
        },
        addUniHeroes(state, action:PayloadAction<IHeroes[]>) {
            state.uniHeroes = action.payload;
        },
        addAgiHeroes(state, action:PayloadAction<IHeroes[]>) {
            state.agiHeroes = action.payload;
        },
    }
})
export default heroesSlice.reducer