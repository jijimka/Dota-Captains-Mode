import {createSlice} from "@reduxjs/toolkit";

interface playerPickOrderSliceProps {
    playerPickTurn: number,
}

const initialState: playerPickOrderSliceProps = {
    playerPickTurn: 0
}
export const playerPickOrderSlice = createSlice({
    name: 'playerPickOrderSlice',
    initialState,
    reducers: {
        increasePickOrder(state: playerPickOrderSliceProps) {
            state.playerPickTurn++
        },
        clearPickOrder(state: playerPickOrderSliceProps) {
            state.playerPickTurn = 0
        }
    }
})
export default playerPickOrderSlice.reducer