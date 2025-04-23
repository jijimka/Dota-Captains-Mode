import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IHeroes, IPickedHero} from "../../types/IHeroes.ts";

interface pickedHeroSliceProps {
    pickedHeroes: IPickedHero[];
    confirmHero:IHeroes | null;
}
const initialState:pickedHeroSliceProps = {
    pickedHeroes:[],
    confirmHero:null
}
export const pickedHeroSlice = createSlice({
    name:'pickedHeroSlice',
    initialState,
    reducers:{
        addPickedHero:(state:pickedHeroSliceProps,action:PayloadAction<IPickedHero>)=> {
            state.pickedHeroes.push(action.payload);
            state.confirmHero = null
        },
        addConfirmHero:(state:pickedHeroSliceProps,action:PayloadAction<IHeroes>)=>{
            state.confirmHero = action.payload;
        },
        clearPickedHeroes:(state:pickedHeroSliceProps,)=> {
            state.pickedHeroes = []
            state.confirmHero = null
        },
        removePickedHero:(state:pickedHeroSliceProps,action:PayloadAction<IHeroes>)=> {
            state.pickedHeroes = state.pickedHeroes.filter((value) => value.hero.id !== action.payload.id)
        }
    }
})
export default pickedHeroSlice.reducer