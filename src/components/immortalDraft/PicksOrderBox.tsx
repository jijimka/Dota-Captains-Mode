import {FC} from "react";
import {getBoxClasses} from "../../utils/getBoxClasses.ts";

interface PicksOrderBoxProps {
    boxNumber:number,
    boxSide:'radiant' | 'dire',
}
const PicksOrderBox:FC<PicksOrderBoxProps> = ({boxNumber,boxSide,}) => {



    return (
        <div className={getBoxClasses(boxSide,boxNumber).join(' ')}>

        </div>
    );
};

export default PicksOrderBox;