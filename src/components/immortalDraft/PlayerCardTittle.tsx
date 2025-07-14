import immortalIcon from "../../images/dota-2-rank-immortal-placed.png";
import {Player} from "../../models/Player.ts";
import {FC} from "react";

interface PlayerCardTittleProps {
    player: Player;
}

const PlayerCardTittle: FC<PlayerCardTittleProps> = ({player}) => {
    return (
        <div className='player-card__title'>
            <div className='player-card__image-div'>
                <img draggable='false' alt='immortal-icon' className='player-card__image' src={immortalIcon}/>
            </div>
            <div className='player-card__nickname'>
                {player.nickname}
            </div>
        </div>
    );
};

export default PlayerCardTittle;