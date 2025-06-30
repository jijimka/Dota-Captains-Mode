import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Player} from "../../models/Player.ts";

interface playerListSliceProps {
    playerList: Player[];
}

const initialState:playerListSliceProps = {
    playerList: [],
}
export const playerListSlice = createSlice({
    name: 'playerListSlice',
    initialState,
    reducers: {
        addPlayer: (state:playerListSliceProps, action:PayloadAction<Player>) => {
            state.playerList.push(action.payload);
        }
    }
})
export default playerListSlice.reducer