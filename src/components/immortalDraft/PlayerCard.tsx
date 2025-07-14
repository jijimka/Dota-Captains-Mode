import {Player} from "../../models/Player.ts";
import {FC} from "react";
import PlayerPickButton from "../UI/PlayerPickButton/PlayerPickButton.tsx";
import PlayerCardTittle from "./PlayerCardTittle.tsx";
import PlayerCardBody from "./PlayerCardBody.tsx";

interface PlayerCardProps {
    player: Player;
}

const PlayerCard: FC<PlayerCardProps> = ({player}) => {

    return (
        <div className='player-card'>
            <PlayerCardTittle player={player}/>
            <PlayerCardBody player={player}/>
            <PlayerPickButton player={player}/>
        </div>
    );
};

export default PlayerCard;