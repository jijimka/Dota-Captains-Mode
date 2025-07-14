import {useTypedDispatch} from "../../hooks/redux.ts";
import {playerPicksSlice} from "../../store/slices/playerPicksSlice.ts";
import {playerListSlice} from "../../store/slices/playerListSlice.ts";
import {playerPickOrderSlice} from "../../store/slices/playerPickOrderSlice.ts";

const ControlPanel = () => {
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
        <div className='control-panel'>
            <div className='control-panel__button' onClick={clearDraft}>Clear</div>
        </div>
    );
};

export default ControlPanel;