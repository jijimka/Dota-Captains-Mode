import NavMenu from "../components/NavMenu.tsx";
import PlayersList from "../components/immortalDraft/PlayersList.tsx";
import {Player} from "../models/Player.ts";

const ImmortalDraft = () => {
    const huyna:Player[] = []
    for (let i = 1; i < 11; i++) {
        const aboba = new Player(`aboba${i}`,i,[1,2,3,4,5])
        huyna.push(aboba)
    }
    return (
        <div>
            <NavMenu/>
            <PlayersList players={huyna}/>
        </div>
    );
};

export default ImmortalDraft;