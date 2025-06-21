import {Player} from "../../models/Player.ts";
import {FC} from "react";
import image from '../../images/dota-2-rank-immortal-placed.png'
import {RoleIcons} from "../../models/RoleIcons.ts";
import {useTypedDispatch} from "../../hooks/redux.ts";
import {playerPicksSlice} from "../../store/slices/playerPicksSlice.ts";
import {PickTurns} from "../../models/PickTurns.ts";
interface PlayerCardProps {
    player: Player;
}

const PlayerCard: FC<PlayerCardProps> = ({player}) => {
    const roles = [RoleIcons.CARRY,RoleIcons.MID,RoleIcons.HARD,RoleIcons.SEMISUP,RoleIcons.FULLSUP]
    const dispatch = useTypedDispatch()
    const {addDirePlayer,addRadiantPlayer} = playerPicksSlice.actions
    function pickPlayer() {

        if (PickTurns.getPickTurn()) {
            dispatch(addRadiantPlayer(player))
            PickTurns.increasePickTurn()
        } else {
            dispatch(addDirePlayer(player))
            PickTurns.increasePickTurn()
        }
        console.log(PickTurns.turn)
    }
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
            <div onClick={pickPlayer} className='player-card__pick-button'>
                pick
            </div>
        </div>
    );
};

export default PlayerCard;