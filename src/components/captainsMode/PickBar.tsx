import PickSide from "./PickSide.tsx";
import PickConfirm from "./PickConfirm.tsx";
import {pickedHeroSlice} from "../../store/slices/pickedHeroSlice.ts";
import {useTypedDispatch} from "../../hooks/redux.ts";
import {pickOrderSlice} from "../../store/slices/pickOrderSlice.ts";
import {heroSynergySlice} from "../../store/slices/heroSynergySlice.ts";
import SmallButton from "../UI/SmallButton/SmallButton.tsx";
import {captainsModeSettings} from "../../store/slices/captainsModeSettings.ts";
import FormInput from "../UI/FormInput/FormInput.tsx";
import {useState} from "react";
import {useWindowSize} from "../../hooks/useWindowSize.tsx";

const PickBar = () => {
    const {clearPickedHeroes} = pickedHeroSlice.actions
    const {refreshPickList} = pickOrderSlice.actions
    const {initializeSynergyData} = heroSynergySlice.actions
    const {resetTeamNames, setRadiantFirst} = captainsModeSettings.actions
    const [searchValue, setSearchValue] = useState<string>()
    const dispatch = useTypedDispatch();
    const windowSize = useWindowSize()
    let isMobile
    if (windowSize.width && windowSize.height) {
        isMobile = windowSize.width < 770
    }

    function clearAll() {
        dispatch(clearPickedHeroes())
        dispatch(refreshPickList())
        dispatch(initializeSynergyData())
        dispatch(resetTeamNames())
        dispatch(setRadiantFirst(true))
    }


    return (
        <div className='picks'>
            <div className='picks__buttons'>
                <SmallButton clickFunction={clearAll}>Clear</SmallButton>
                <form>
                    <FormInput
                        name='hero search mobile'
                        value={searchValue}
                        onChange={(event) => setSearchValue(event.target.value)}
                        placeholder='Search hero'
                        style={{display:`${isMobile ? 'block' : 'none'}`}}
                    />

                </form>
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