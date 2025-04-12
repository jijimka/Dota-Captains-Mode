import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IHeroes, IPickedHero} from "../../types/IHeroes.ts";

interface pickedHeroSliceProps {
    pickedHeroes: IPickedHero[];
    disabledHeroes:number[];
    confirmHero:IHeroes | null;
}
const initialState:pickedHeroSliceProps = {
    pickedHeroes:[],
    disabledHeroes:[],
    confirmHero:null
}
export const pickedHeroSlice = createSlice({
    name:'pickedHeroSlice',
    initialState,
    reducers:{
        addPickedHero:(state:pickedHeroSliceProps,action:PayloadAction<IPickedHero>)=> {
            state.pickedHeroes.push(action.payload);
            state.disabledHeroes.push(action.payload.hero.id)
            state.confirmHero = null
        },
        addConfirmHero:(state:pickedHeroSliceProps,action:PayloadAction<IHeroes>)=>{
            state.confirmHero = action.payload;
        },
        clearPickedHeroes:(state:pickedHeroSliceProps,)=> {
            state.pickedHeroes = []
            state.confirmHero = null
            state.disabledHeroes = []
        },
        removePickedHero:(state:pickedHeroSliceProps,action:PayloadAction<IHeroes>)=> {
            state.pickedHeroes = state.pickedHeroes.filter((value) => value.hero.id !== action.payload.id)
            state.disabledHeroes = state.disabledHeroes.filter((value) => value !== action.payload.id)
        }
    }
})
export default pickedHeroSlice.reducer