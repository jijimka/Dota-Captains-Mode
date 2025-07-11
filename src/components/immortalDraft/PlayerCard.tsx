import {Player} from "../../models/Player.ts";
import {FC} from "react";
import image from '../../images/dota-2-rank-immortal-placed.png'
import {RoleIcons} from "../../models/RoleIcons.ts";
import PlayerPickButton from "../UI/PlayerPickButton/PlayerPickButton.tsx";

interface PlayerCardProps {
    player: Player;
}

const PlayerCard: FC<PlayerCardProps> = ({player}) => {

    return (
        <div className='player-card'>
            <div className='player-card__title'>
                <div className='player-card__image-div'>
                    <img draggable='false' alt='immortal-icon' className='player-card__image' src={image}/>
                </div>
                <div className='player-card__nickname'>
                    {player.nickname}
                </div>
            </div>
            <div className='player-card__body'>
                <div className='player-card__role'>
                    <p className='player-card__info-title'>Preferred role </p>
                    <div className='player-card__role-list'>
                        {player.role.map(item =>
                            <img draggable='false' alt='role-icon' src={item?RoleIcons.getRoleIcons(item-1):''} className='player-card__role-icon'/>
                        )}
                    </div>
                </div>
                <div className='player-card__rating'>
                    <p className='player-card__info-title'>Player MMR</p>
                    {player.mmr}
                </div>
            </div>
            <PlayerPickButton player={player}/>
        </div>
    );
};

export default PlayerCard;