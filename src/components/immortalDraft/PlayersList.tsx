import {FC, useMemo} from "react";
import PlayerCard from "./PlayerCard.tsx";
import {useTypedSelector} from "../../hooks/redux.ts";
import {Player} from "../../models/Player.ts";

const PlayersList:FC = () => {
    const players = useTypedSelector(state => state.playerList.playerList)

    function lowestMmr(firstPlayer:Player,secondPlayer:Player):number {
        if (firstPlayer.mmr === null) return -1
        if (secondPlayer.mmr === null) return 1
        if (firstPlayer.mmr < secondPlayer.mmr) return -1
        if (firstPlayer.mmr > secondPlayer.mmr) return 1
        return 0
    }

    const filteredPlayers = useMemo(() => {
        return [...players].sort((firstPlayer,secondPlayer) => lowestMmr(firstPlayer,secondPlayer))
    },[players])
    return (
        <div className='player-list'>
            {filteredPlayers.map(player =>
                <PlayerCard player={player}/>
            )}
        </div>
    );
};

export default PlayersList;