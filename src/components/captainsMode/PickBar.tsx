import PickSide from "./PickSide.tsx";
import PickConfirm from "./PickConfirm.tsx";
import {pickedHeroSlice} from "../../store/slices/pickedHeroSlice.ts";
import {useTypedDispatch} from "../../hooks/redux.ts";
import {pickOrderSlice} from "../../store/slices/pickOrderSlice.ts";
import {heroSynergySlice} from "../../store/slices/heroSynergySlice.ts";
import SmallButton from "../UI/SmallButton/SmallButton.tsx";
import {captainsModeSettings} from "../../store/slices/captainsModeSettings.ts";
import FormInput from "../UI/FormInput/FormInput.tsx";
import {useMemo, useState} from "react";
import {useWindowSize} from "../../hooks/useWindowSize.tsx";
import {useSetSearchedHeroes} from "../../hooks/useSetSearchedHero.tsx";
import {heroesSlice} from "../../store/slices/heroesSlice.ts";

const PickBar = () => {
    const {clearPickedHeroes} = pickedHeroSlice.actions
    const {refreshPickList} = pickOrderSlice.actions
    const {initializeSynergyData} = heroSynergySlice.actions
    const {resetTeamNames, setRadiantFirst} = captainsModeSettings.actions
    const [searchValue, setSearchValue] = useState<string>('')
    const {idArray} = useSetSearchedHeroes(searchValue)
    const {setSearchedHero,clearSearchedHero} = heroesSlice.actions
    const dispatch = useTypedDispatch();
    const windowSize = useWindowSize()
    let isMobile
    if (windowSize.width && windowSize.height) {
        isMobile = windowSize.width < 771
    }
    function clearSearch() {
        setSearchValue('')
    }
    function clearAll() {
        dispatch(clearPickedHeroes())
        dispatch(refreshPickList())
        dispatch(initializeSynergyData())
        dispatch(resetTeamNames())
        dispatch(setRadiantFirst(true))
    }
    useMemo(() => {
        searchValue.length > 0 ? dispatch(setSearchedHero(idArray)) : dispatch(clearSearchedHero())
    },[searchValue])

    return (
        <div className='picks'>
            <div className='picks__buttons'>
                <SmallButton clickFunction={clearAll}>Clear picks</SmallButton>
                <div className='picks__buttons-mobile' style={{display:`${isMobile ? 'flex' : 'none'}`}}>
                    <FormInput
                        name='hero search mobile'
                        value={searchValue}
                        onChange={(event) => setSearchValue(event.target.value)}
                        placeholder='Search hero'
                        autoComplete='off'
                    />
                    <SmallButton clickFunction={clearSearch}>Clear</SmallButton>
                </div>
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