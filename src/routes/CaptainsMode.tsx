import NavMenu from "../components/NavMenu.tsx";
import AllHeroesList from "../components/captainsMode/AllHeroesList.tsx";
import PickBar from "../components/captainsMode/PickBar.tsx";
import SearchInput from "../components/captainsMode/SearchInput.tsx";
import ControlPanel from "../components/immortalDraft/ControlPanel.tsx";
import FormCheckbox from "../components/UI/FormCheckbox/FormCheckbox.tsx";
import {useTypedDispatch, useTypedSelector} from "../hooks/redux.ts";
import {heroSynergySlice} from "../store/slices/heroSynergySlice.ts";
import {captainsModeSettings} from "../store/slices/captainsModeSettings.ts";
import {SortList} from "../models/SortList.ts";

const CaptainsMode = () => {
    const {isSynergyActive} = useTypedSelector(state => state.synergyData)
    const {setIsSynergyActive} = heroSynergySlice.actions
    const {sortBy} = useTypedSelector(state => state.settingsCM)
    const {setSortBy} = captainsModeSettings.actions
    const dispatch = useTypedDispatch()
    function synergyCheckboxHandler() {
        dispatch(setIsSynergyActive(!isSynergyActive))
    }
    function sortCheckboxHandler() {
        sortBy === SortList.synergy ?
            dispatch(setSortBy(SortList.default))
            :
            dispatch(setSortBy(SortList.synergy))
    }
    return (
        <div className="CaptainsMode">
            <SearchInput>
                <NavMenu/>
                <AllHeroesList/>
                <PickBar/>
                <ControlPanel>
                    <FormCheckbox onChange={() => synergyCheckboxHandler()} labelId={'picks-tooltip'}>
                        Disable picks tooltip
                    </FormCheckbox>
                    <FormCheckbox onChange={() => sortCheckboxHandler()} labelId={'attributes-sort'}>
                        Disable sorting by synergy
                    </FormCheckbox>
                </ControlPanel>
            </SearchInput>
        </div>
    );
};

export default CaptainsMode;