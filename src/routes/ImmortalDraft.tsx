import PlayersList from "../components/immortalDraft/PlayersList.tsx";
import PlayerPicksList from "../components/immortalDraft/PlayerPicksList.tsx";
import PicksOrderBar from "../components/immortalDraft/PicksOrderBar.tsx";
import PlayerForm from "../components/UI/PlayerForm/PlayerForm.tsx";
import {useTypedDispatch} from "../hooks/redux.ts";
import {playerPicksSlice} from "../store/slices/playerPicksSlice.ts";
import {playerListSlice} from "../store/slices/playerListSlice.ts";
import {playerPickOrderSlice} from "../store/slices/playerPickOrderSlice.ts";
import Background from "../components/UI/Background/Background.tsx";
import SmallButton from "../components/UI/SmallButton/SmallButton.tsx";
import ControlPanel from "../components/UI/ControlPanel/ControlPanel.tsx";
import Title from "../components/UI/Title/Title.tsx";


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
            <Background lightVersion={true}/>
            <ControlPanel>
                <Title>Settings</Title>
            </ControlPanel>
            <PlayerForm/>
            <PlayerPicksList/>
            <PicksOrderBar/>
            <PlayersList/>
            <div className='control-panel'>
                <SmallButton clickFunction={clearDraft}>Clear</SmallButton>
            </div>
        </div>
    );
};

export default ImmortalDraft;