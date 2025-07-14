import {FC} from 'react';
import RoleList from "./RoleList.tsx";
import {Player} from "../../models/Player.ts";

interface PlayerCardBodyProps {
    player: Player;
}

const PlayerCardBody: FC<PlayerCardBodyProps> = ({player}) => {
    return (
        <div className='player-card__body'>
            <div className='player-card__role'>
                <p className='player-card__info-title'>Preferred role </p>
                <RoleList player={player}/>
            </div>
            <div className='player-card__rating'>
                <p className='player-card__info-title'>Player MMR</p>
                {player.mmr}
            </div>
        </div>
    );
};

export default PlayerCardBody;