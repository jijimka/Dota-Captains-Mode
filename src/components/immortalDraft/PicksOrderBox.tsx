import {FC} from "react";
import {getBoxClasses} from "../../utils/getBoxClasses.ts";
import {useTypedSelector} from "../../hooks/redux.ts";

interface PicksOrderBoxProps {
    boxNumber: number,
    boxSide: 'radiant' | 'dire',
}

const PicksOrderBox: FC<PicksOrderBoxProps> = ({boxNumber, boxSide}) => {
    const turn = useTypedSelector(state => state.playerPicksTurn.playerPickTurn)
    return (
        <div className={getBoxClasses(boxSide, boxNumber, turn).join(' ')}>

        </div>
    );
};

export default PicksOrderBox;