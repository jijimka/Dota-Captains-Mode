import {combineReducers, configureStore} from "@reduxjs/toolkit";
import heroesSlice from "./slices/heroesSlice.ts";
import pickedHeroSlice from "./slices/pickedHeroSlice.ts";
import pickOrderSlice from "./slices/pickOrderSlice.ts";
import playerPicksSlice from "./slices/playerPicksSlice.ts";
import playerPickOrderSlice from "./slices/playerPickOrderSlice.ts";


const rootReducer = combineReducers({
    heroes: heroesSlice,
    pickedHeroes: pickedHeroSlice,
    pickOrder: pickOrderSlice,
    playersPicks: playerPicksSlice,
    playerPicksTurn: playerPickOrderSlice,
})
export const setupStore = () => configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppState = ReturnType<typeof setupStore>
export type DispatchState = AppState['dispatch']