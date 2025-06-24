import {PickTurns} from "../../models/PickTurns.ts";
import {FC,} from "react";
import PicksOrderBox from "./PicksOrderBox.tsx";

const PicksOrderBar:FC = () => {
    const boxNumbers = [0,1,2,3,4,5,6,7,8,9]
    return (
        <div className='picks-bar'>
            {boxNumbers.map(boxNumber =>
                <PicksOrderBox boxNumber={boxNumber} boxSide={PickTurns.pickOrder[boxNumber]}key={boxNumber}/>
            )}
        </div>
    );
};

export default PicksOrderBar;