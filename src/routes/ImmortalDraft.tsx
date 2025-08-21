import NavMenu from "../components/NavMenu.tsx";
import PlayersList from "../components/immortalDraft/PlayersList.tsx";
import PlayerPicksList from "../components/immortalDraft/PlayerPicksList.tsx";
import PicksOrderBar from "../components/immortalDraft/PicksOrderBar.tsx";
import PlayerForm from "../components/UI/PlayerForm/PlayerForm.tsx";
import ControlPanel from "../components/immortalDraft/ControlPanel.tsx";
import {useTypedDispatch} from "../hooks/redux.ts";
import {playerPicksSlice} from "../store/slices/playerPicksSlice.ts";
import {playerListSlice} from "../store/slices/playerListSlice.ts";
import {playerPickOrderSlice} from "../store/slices/playerPickOrderSlice.ts";


const ImmortalDraft = () => {
    const dispatch = useTypedDispatch()
    const {clearPlayers} = playerPicksSlice.actions;
    const {clearPlayerList} = playerListSlice.actions;
    const {clearPickOrder} = playerPickOrderSlice.actions

    function clearDraft() {
        dispatch(clearPlayers())
        dispatch(clearPickOrder())
        dispatch(clearPlayerList())
    }
    return (
        <div className='ImmortalDraft'>
            <NavMenu/>
            <PlayerForm/>
            <PlayerPicksList/>
            <PicksOrderBar/>
            <PlayersList/>
            <ControlPanel>
                <div className='control-panel__button' onClick={clearDraft}>Clear</div>
            </ControlPanel>
        </div>
    );
};

export default ImmortalDraft;