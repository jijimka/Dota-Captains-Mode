import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {DispatchState, RootState} from "../store/index";


export const useTypedDispatch = () => useDispatch<DispatchState>()
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector