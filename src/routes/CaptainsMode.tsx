import NavMenu from "../components/NavMenu.tsx";
import AllHeroesList from "../components/captainsMode/AllHeroesList.tsx";
import PickBar from "../components/captainsMode/PickBar.tsx";
import SearchInput from "../components/UI/SearchInput/SearchInput.tsx";
import ControlPanel from "../components/immortalDraft/ControlPanel.tsx";
import FormCheckbox from "../components/UI/FormCheckbox/FormCheckbox.tsx";
import {useTypedDispatch, useTypedSelector} from "../hooks/redux.ts";
import {heroSynergySlice} from "../store/slices/heroSynergySlice.ts";

const CaptainsMode = () => {
    const {isSynergyActive} = useTypedSelector(state => state.synergyData)
    const {setIsSynergyActive} = heroSynergySlice.actions
    const dispatch = useTypedDispatch()
    function synergyCheckboxHandler() {
        dispatch(setIsSynergyActive(!isSynergyActive))
    }
    return (
        <div className="CaptainsMode">
            <SearchInput>
                <NavMenu/>
                <AllHeroesList/>
                <PickBar/>
                <ControlPanel>
                    <FormCheckbox onChange={() => synergyCheckboxHandler()} labelId={'synergyCheckbox'}>
                        Disable picks tooltip
                    </FormCheckbox>
                </ControlPanel>
            </SearchInput>
        </div>
    );
};

export default CaptainsMode;