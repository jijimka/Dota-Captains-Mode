import PickSide from "./PickSide.tsx";
import PickConfirm from "./PickConfirm.tsx";
import {pickedHeroSlice} from "../store/slices/pickedHeroSlice.ts";
import {useTypedDispatch} from "../hooks/redux.ts";
import {pickOrderSlice} from "../store/slices/pickOrderSlice.ts";

const PickList = () => {
    const {clearPickedHeroes} = pickedHeroSlice.actions
    const {clearPicks} = pickOrderSlice.actions
    const dispatch = useTypedDispatch();

    function clearAll() {
        dispatch(clearPickedHeroes())
        dispatch(clearPicks())
    }

    return (
        <div className='picks'>
            <h2 className='clear-button' onClick={clearAll}>Очистить</h2>
            <div className='picks-list'>
                <PickSide side={'Radiant'}/>
                <PickSide side={'Dire'}/>
            </div>
            <PickConfirm/>
        </div>
    );
};

export default PickList;