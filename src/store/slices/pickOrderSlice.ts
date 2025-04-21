import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface pickOrderSliceProps {
    pickOrder: number;
    pickQueue: number[];
    selectedPick: number | null;
    skipPicks:number[],
}

const initialState: pickOrderSliceProps = {
    pickOrder: 1,
    pickQueue: [],
    selectedPick: null,
    skipPicks:[],
}
export const pickOrderSlice = createSlice({
    name: 'pickOrderSlice',
    initialState,
    reducers: {
        increasePickOrder: (state: pickOrderSliceProps) => {
            state.pickOrder += 1
        },
        addToPickQueue: (state: pickOrderSliceProps, action: PayloadAction<number>) => {
            state.pickQueue.push(action.payload);
        },
        removePickQueue: (state: pickOrderSliceProps,) => {
            state.pickQueue.shift()
        },
        clearAll: (state: pickOrderSliceProps) => {
            state.pickQueue = [];
            state.pickOrder = 1;
        },
        sortPickQueue: (state:pickOrderSliceProps) => {
            state.pickQueue = state.pickQueue.sort((a,b) => {
                return a-b
            })
        },
        selectPick: (state:pickOrderSliceProps,action:PayloadAction<number>) => {
            state.selectedPick = action.payload
        },
        clearSelectedPick: (state:pickOrderSliceProps,) => {
            state.selectedPick = null;
        },
        addToSkipPicks: (state:pickOrderSliceProps,action:PayloadAction<number>) => {
            state.skipPicks.push(action.payload)
            state.skipPicks.sort((a,b) => {
                return a-b
            })
        },
        removeSkipPick:(state:pickOrderSliceProps,action:PayloadAction<number>) => {
            state.skipPicks = state.skipPicks.filter((item:number) => {
                return item !== action.payload
            })
            state.skipPicks.sort((a,b) => {
                return a-b
            })
        }
    }
})
export default pickOrderSlice.reducer