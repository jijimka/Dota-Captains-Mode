import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IHeroes} from "../../types/IHeroes.ts";

interface heroesSliceProps {
    agiHeroes: IHeroes[];
    uniHeroes: IHeroes[];
    strHeroes: IHeroes[];
    intHeroes: IHeroes[];
    searchedHero: number[] | null;
}

const initialState:heroesSliceProps = {
    agiHeroes:[],
    intHeroes:[],
    strHeroes:[],
    uniHeroes:[],
    searchedHero:null,
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
        setSearchedHero(state:heroesSliceProps,action:PayloadAction<number[]>) {
            state.searchedHero = action.payload;
        },
        clearSearchedHero(state:heroesSliceProps) {
            state.searchedHero = null
        }
    }
})
export default heroesSlice.reducer