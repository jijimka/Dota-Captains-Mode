import {combineReducers, configureStore} from "@reduxjs/toolkit";
import heroesSlice from "./slices/heroesSlice.ts";
import pickedHeroSlice from "./slices/pickedHeroSlice.ts";
import pickOrderSlice from "./slices/pickOrderSlice.ts";


const rootReducer = combineReducers({
    heroes: heroesSlice,
    pickedHeroes: pickedHeroSlice,
    pickOrder: pickOrderSlice,
})
export const setupStore = () => configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppState = ReturnType<typeof setupStore>
export type DispatchState = AppState['dispatch']