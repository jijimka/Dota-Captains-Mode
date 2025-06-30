import {FC} from "react";
import PlayerCard from "./PlayerCard.tsx";
import {useTypedSelector} from "../../hooks/redux.ts";

const PlayersList:FC = () => {
    const players = useTypedSelector(state => state.playerList.playerList)
    return (
        <div className='player-list'>
            {players.map(player =>
                <PlayerCard player={player}/>
            )}
        </div>
    );
};

export default PlayersList;