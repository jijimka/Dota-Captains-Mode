import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IHeroes, IPickedHero} from "../../types/IHeroes.ts";

interface pickedHeroSliceProps {
    pickedHeroes: IPickedHero[];
    pickNumber:number;
    disabledHeroes:number[];
    confirmHero:IHeroes | null;
}
const initialState:pickedHeroSliceProps = {
    pickedHeroes:[],
    pickNumber:1,
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
            state.pickNumber = state.pickedHeroes.length
            state.pickNumber += 1;
            state.confirmHero = null
        },
        addConfirmHero:(state:pickedHeroSliceProps,action:PayloadAction<IHeroes>)=>{
            state.confirmHero = action.payload;
        }
    }
})
export default pickedHeroSlice.reducer