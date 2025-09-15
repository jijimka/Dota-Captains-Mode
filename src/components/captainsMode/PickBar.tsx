import PickSide from "./PickSide.tsx";
import PickConfirm from "./PickConfirm.tsx";
import {pickedHeroSlice} from "../../store/slices/pickedHeroSlice.ts";
import {useTypedDispatch} from "../../hooks/redux.ts";
import {pickOrderSlice} from "../../store/slices/pickOrderSlice.ts";
import {heroSynergySlice} from "../../store/slices/heroSynergySlice.ts";
import SmallButton from "../UI/SmallButton/SmallButton.tsx";

const PickBar = () => {
    const {clearPickedHeroes} = pickedHeroSlice.actions
    const {refreshPickList} = pickOrderSlice.actions
    const {initializeSynergyData} = heroSynergySlice.actions


    const dispatch = useTypedDispatch();

    function clearAll() {
        dispatch(clearPickedHeroes())
        dispatch(refreshPickList())
        dispatch(initializeSynergyData())
    }



    return (
        <div className='picks'>
            <div className='picks__buttons'>
                <SmallButton clickFunction={clearAll}>Clear</SmallButton>
            </div>
            <div className='picks__list'>
                <PickSide side={'Radiant'}/>
                <PickSide side={'Dire'}/>
            </div>
            <PickConfirm/>
        </div>
    );
};

export default PickBar;