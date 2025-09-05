import FormCheckbox from "../UI/FormCheckbox/FormCheckbox.tsx";
import FindMatch from "./FindMatch.tsx";
import ControlPanel from "../UI/ControlPanel/ControlPanel.tsx";
import {useTypedDispatch, useTypedSelector} from "../../hooks/redux.ts";
import {heroSynergySlice} from "../../store/slices/heroSynergySlice.ts";
import {captainsModeSettings} from "../../store/slices/captainsModeSettings.ts";
import {SortList} from "../../models/SortList.ts";

const CaptainsModeSettings = () => {
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
        <ControlPanel title='Settings'>
            <div className='settings'>
                <FormCheckbox onChange={() => synergyCheckboxHandler()} labelId={'picks-tooltip'}>
                    Disable picks tooltip
                </FormCheckbox>
                <FormCheckbox onChange={() => sortCheckboxHandler()} labelId={'attributes-sort'}>
                    Disable sorting by synergy
                </FormCheckbox>
                <FindMatch/>
            </div>
        </ControlPanel>
    );
};

export default CaptainsModeSettings;