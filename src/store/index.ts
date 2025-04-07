import {combineReducers, configureStore} from "@reduxjs/toolkit";
import heroesSlice from "./slices/heroesSlice.ts";


const rootReducer = combineReducers({
    heroes: heroesSlice
})
export const setupStore = () => configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppState = ReturnType<typeof setupStore>
export type DispatchState = AppState['dispatch']