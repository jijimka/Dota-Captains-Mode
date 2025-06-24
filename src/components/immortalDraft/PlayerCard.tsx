import {Player} from "../../models/Player.ts";
import {FC, useState} from "react";
import image from '../../images/dota-2-rank-immortal-placed.png'
import {RoleIcons} from "../../models/RoleIcons.ts";
import PlayerPickButton from "../UI/PlayerPickButton/PlayerPickButton.tsx";
import {useTypedSelector} from "../../hooks/redux.ts";

interface PlayerCardProps {
    player: Player;
}

const PlayerCard: FC<PlayerCardProps> = ({player}) => {
    const roles = [RoleIcons.CARRY,RoleIcons.MID,RoleIcons.HARD,RoleIcons.SEMISUP,RoleIcons.FULLSUP]
    const radiantPlayers = useTypedSelector(state => state.playersPicks.radiantPlayers)
    const direPlayers = useTypedSelector(state => state.playersPicks.direPlayers)
    const [cardOff,setCardOff] = useState<boolean>(false)

    return (
        <div className='player-card'>
            <div className='player-card__title'>
                <div className='player-card__image-div'>
                    <img alt='immortal-icon' className='player-card__image' src={image}/>
                </div>
                <div>
                    {player.nickname}
                </div>
            </div>
            <div className='player-card__body'>
                <div className='player-card__role'>
                    <p>Preferred role </p>
                    <div className='player-card__role-list'>
                        {player.role.map(item =>
                            <img alt='role-icon' src={roles[item-1]} className='player-card__role-icon'/>
                        )}
                    </div>
                </div>
                <div className='player-card__rating'>
                    <p>Player MMR</p>
                    {player.mmr}
                </div>
            </div>
            <PlayerPickButton buttonOff={cardOff} player={player}/>
        </div>
    );
};

export default PlayerCard;