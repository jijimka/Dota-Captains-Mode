import PickSide from "./PickSide.tsx";
import PickConfirm from "./PickConfirm.tsx";
import {pickedHeroSlice} from "../../store/slices/pickedHeroSlice.ts";
import {useTypedDispatch} from "../../hooks/redux.ts";
import {pickOrderSlice} from "../../store/slices/pickOrderSlice.ts";
import {useState} from "react";
import FindMatchModal from "./FindMatchModal.tsx";
import {heroSynergySlice} from "../../store/slices/heroSynergySlice.ts";

const PickBar = () => {
    const {clearPickedHeroes} = pickedHeroSlice.actions
    const {refreshPickList} = pickOrderSlice.actions
    const {initializeSynergyData} = heroSynergySlice.actions
    const [isFindMatchModalActive, setIsFindMatchModalActive] = useState<boolean>(false);

    const dispatch = useTypedDispatch();

    function clearAll() {
        dispatch(clearPickedHeroes())
        dispatch(refreshPickList())
        dispatch(initializeSynergyData())
    }

    function findMatchButtonHandler() {
        setIsFindMatchModalActive(true)
    }


    return (
        <div className='picks'>
            <div className='picks__buttons'>
                <h2 className='picks-button' onClick={clearAll}>Clear</h2>
                <h2 className='picks-button' onClick={findMatchButtonHandler}>Get picks from match</h2>
                <FindMatchModal isFindMatchModalActive={isFindMatchModalActive} setIsFindMatchModalActive={setIsFindMatchModalActive}/>
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