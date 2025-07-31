import {FC} from "react";
import {useTypedSelector} from "../../hooks/redux.ts";
import {getBoxClasses} from "../../utils/getBoxClasses/getBoxClasses.ts";

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