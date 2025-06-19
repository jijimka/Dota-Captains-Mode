import {Player} from "../../models/Player.ts";
import {FC} from "react";
import PlayerCard from "./PlayerCard.tsx";

interface PlayerListProps {
    players: Player[];
}
const PlayersList:FC<PlayerListProps> = ({players}) => {
    return (
        <div className='player-list'>
            {players.map(player =>
                <PlayerCard player={player}/>
            )}
        </div>
    );
};

export default PlayersList;