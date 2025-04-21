import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface pickOrderSliceProps {
    pickQueue: number[];
    selectedPick: number | null;

}

const initialState: pickOrderSliceProps = {
    pickQueue: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
    selectedPick: null,
}
export const pickOrderSlice = createSlice({
    name: 'pickOrderSlice',
    initialState,
    reducers: {
        addPickQueue: (state:pickOrderSliceProps,action:PayloadAction<number>) => {
            state.pickQueue.push(action.payload);
            state.pickQueue = state.pickQueue.sort((a, b) => {
                return a-b
            })
        },
        removePickQueue: (state:pickOrderSliceProps) => {
            state.pickQueue.shift()
            state.pickQueue = state.pickQueue.sort((a, b) => {
                return a-b
            })
        },
        removeSelectedPickQueue: (state:pickOrderSliceProps,action:PayloadAction<number>) => {
            state.pickQueue = state.pickQueue.filter((item) => {
                return item !== action.payload;
            })
            state.pickQueue = state.pickQueue.sort((a, b) => {
                return a-b
            })
        },
        clearAll: (state: pickOrderSliceProps) => {
            state.pickQueue = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
        },
        selectPick: (state:pickOrderSliceProps,action:PayloadAction<number>) => {
            state.selectedPick = action.payload
        },
        clearSelectedPick: (state:pickOrderSliceProps,) => {
            state.selectedPick = null;
        },
    }
})
export default pickOrderSlice.reducer