import NavMenu from "../components/NavMenu.tsx";
import PlayersList from "../components/immortalDraft/PlayersList.tsx";
import PlayerPicksList from "../components/immortalDraft/PlayerPicksList.tsx";
import PicksOrderBar from "../components/immortalDraft/PicksOrderBar.tsx";
import PlayerForm from "../components/UI/PlayerForm/PlayerForm.tsx";
import ControlPanel from "../components/immortalDraft/ControlPanel.tsx";


const ImmortalDraft = () => {

    return (
        <div className='ImmortalDraft'>
            <NavMenu/>
            <PlayerForm/>
            <PlayerPicksList/>
            <PicksOrderBar/>
            <PlayersList/>
            <ControlPanel/>
        </div>
    );
};

export default ImmortalDraft;