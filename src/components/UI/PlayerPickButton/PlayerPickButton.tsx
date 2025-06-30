import {FC} from "react";
import {Player} from "../../../models/Player.ts";
import {useTypedDispatch, useTypedSelector} from "../../../hooks/redux.ts";
import {playerPicksSlice} from "../../../store/slices/playerPicksSlice.ts";
import classes from './PlayerPickButton.module.css'
import {getSidePickTurn} from "../../../utils/getSidePickTurn.ts";
import {playerPickOrderSlice} from "../../../store/slices/playerPickOrderSlice.ts";
interface PlayerPickButtonProps {
    player:Player;
}
const PlayerPickButton:FC<PlayerPickButtonProps> = ({player}) => {
    const dispatch = useTypedDispatch()
    const {addRadiantPlayer,addDirePlayer} = playerPicksSlice.actions
    const radiantPlayers = useTypedSelector(state => state.playersPicks.radiantPlayers)
    const direPlayers = useTypedSelector(state => state.playersPicks.direPlayers)
    const turn = useTypedSelector(state => state.playerPicksTurn.playerPickTurn)
    const increaseTurn = playerPickOrderSlice.actions.increasePickOrder
    let buttonOff = false
    const buttonClasses = [
        classes.pickButton
    ]
    function pickPlayer() {
        if (buttonOff) return
        if (getSidePickTurn(turn)) {
            dispatch(addRadiantPlayer(player))
            dispatch(increaseTurn())
        } else {
            dispatch(addDirePlayer(player))
            dispatch(increaseTurn())
        }
    }

    if (radiantPlayers.includes(player) || direPlayers.includes(player)) {
        buttonClasses.push(classes.pickButtonOff)
        buttonOff = true
    }

    return (
        <div onClick={pickPlayer} className={buttonClasses.join(' ')}>
            pick
        </div>
    );
};

export default PlayerPickButton;