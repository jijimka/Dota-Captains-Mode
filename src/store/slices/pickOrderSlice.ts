import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface pickOrderSliceProps {
    pickOrder: number;
    pickQueue: number[];
}

const initialState: pickOrderSliceProps = {
    pickOrder: 1,
    pickQueue: [],
}
export const pickOrderSlice = createSlice({
    name: 'pickOrderSlice',
    initialState,
    reducers: {
        increasePickOrder: (state: pickOrderSliceProps) => {
            state.pickOrder += 1
        },
        heroRemoved: (state: pickOrderSliceProps, action: PayloadAction<number>) => {
            state.pickQueue.push(action.payload);
        },
        removePickQueue: (state: pickOrderSliceProps,) => {
            state.pickQueue.shift()
        },
        clearAll: (state: pickOrderSliceProps) => {
            state.pickQueue = [];
            state.pickOrder = 1;
        }
    }
})
export default pickOrderSlice.reducer