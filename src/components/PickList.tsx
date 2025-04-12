import PickSide from "./PickSide.tsx";
import PickConfirm from "./PickConfirm.tsx";
import {pickedHeroSlice} from "../store/slices/pickedHeroSlice.ts";
import {useTypedDispatch} from "../hooks/redux.ts";

const PickList = () => {
    const {clearPickedHeroes} = pickedHeroSlice.actions
    const dispatch = useTypedDispatch();
    function clearPicks() {
        dispatch(clearPickedHeroes())
    }
    return (
        <div className='picks'>
            <h2 className='clear-button' onClick={clearPicks}>Очистить</h2>
            <div className='picks-list'>
                <PickSide side={'Radiant'}/>
                <PickSide side={'Dire'}/>
            </div>
            <PickConfirm/>
        </div>
    );
};

export default PickList;