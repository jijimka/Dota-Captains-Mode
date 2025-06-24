import {FC} from "react";
import {Player} from "../../../models/Player.ts";
import {useTypedDispatch, useTypedSelector} from "../../../hooks/redux.ts";
import {playerPicksSlice} from "../../../store/slices/playerPicksSlice.ts";
import classes from './PlayerPickButton.module.css'
import {getSidePickTurn} from "../../../utils/getSidePickTurn.ts";
import {playerPickOrderSlice} from "../../../store/slices/playerPickOrderSlice.ts";
interface PlayerPickButtonProps {
    player:Player;
    buttonOff:boolean;
}
const PlayerPickButton:FC<PlayerPickButtonProps> = ({player,buttonOff}) => {
    const dispatch = useTypedDispatch()
    const {addRadiantPlayer,addDirePlayer} = playerPicksSlice.actions
    const turn = useTypedSelector(state => state.playerPicksTurn.playerPickTurn)
    const increaseTurn = playerPickOrderSlice.actions.increasePickOrder
    const buttonClasses = [
        classes.pickButton
    ]
    function pickPlayer() {

        if (getSidePickTurn(turn)) {
            dispatch(addRadiantPlayer(player))
            dispatch(increaseTurn())
        } else {
            dispatch(addDirePlayer(player))
            dispatch(increaseTurn())
        }
    }
    if (buttonOff) {
        buttonClasses.push(classes.pickButtonOff)
    }
    return (
        <div onClick={pickPlayer} className={buttonClasses.join(' ')}>
            pick
        </div>
    );
};

export default PlayerPickButton;