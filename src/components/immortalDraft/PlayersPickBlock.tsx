import {FC} from 'react';
import {useTypedSelector} from "../../hooks/redux.ts";
import {PlayerColors} from "../../models/PlayerColors.ts";
import {getPlayerFromList} from "../../utils/getPlayerFromList.ts";
import {getNickname} from "../../utils/getNickname.ts";
import TextPopup from "../UI/TextPopup/TextPopup.tsx";

interface PlayersPickBlockProps {
    order: number;
    side: 'Radiant' | 'Dire';
}

const PlayersPickBlock: FC<PlayersPickBlockProps> = ({order, side}) => {

    const radiantPicks = useTypedSelector(state => state.playersPicks.radiantPlayers)
    const direPicks = useTypedSelector(state => state.playersPicks.direPlayers)
    const player = getPlayerFromList(side === 'Radiant' ? radiantPicks : direPicks, order)
    const borderColor = PlayerColors.getColors(side)[order]
    const styles = {
        borderBottom: `5px solid ${borderColor}`
    }

    if (player === null) return (
        <div className='player-block-list'>
            <div
                className={['player-block', side === 'Radiant' ? 'radiant-picks' : 'dire-picks'].join(' ')}
                style={styles}
            >
                <div className='player-block__rating'>
                </div>
            </div>
            <div className='player-block__nickname'>
            </div>
        </div>
    )
    const [playerNickname,isPlayerNicknameEdited] = getNickname(player.nickname)

    return (
        <div className='player-block-list'>
            <div
                className={['player-block', side === 'Radiant' ? 'radiant-picks' : 'dire-picks'].join(' ')}
                style={styles}
            >
                <div className='player-block__rating'>
                    {!player.mmr ? 'Not calibrated' : `MMR ${player.mmr}`}
                </div>
            </div>
            <div className='player-block__nickname'>
                {isPlayerNicknameEdited?
                    <TextPopup content={player.nickname}>{playerNickname}</TextPopup>
                    :
                    <p>{player.nickname}</p>
                }
            </div>
        </div>
    );
};

export default PlayersPickBlock;