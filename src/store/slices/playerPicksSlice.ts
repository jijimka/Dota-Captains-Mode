import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Player} from "../../models/Player.ts";

interface playerPicksSliceProps {
    radiantPlayers: Player[];
    direPlayers: Player[];
}

const initialState:playerPicksSliceProps = {
    radiantPlayers: [],
    direPlayers: [],
}
export const playerPicksSlice = createSlice({
    name: 'playerPicksSlice',
    initialState,
    reducers: {
        addRadiantPlayer (state:playerPicksSliceProps,action:PayloadAction<Player>) {
            state.radiantPlayers.push(action.payload)
        }
    }
})
export default playerPicksSlice.reducer