import {FC} from 'react';
import PickBlock from "./PickBlock.tsx";
import {PickOrder} from "../../models/PickOrder.ts";

interface PickSideProps {
    side: 'Radiant' | 'Dire'
}

const PickSide: FC<PickSideProps> = ({side}) => {

    function getSide(): number[] {
        return side === 'Radiant' ? PickOrder.radiant : PickOrder.dire
    }

    return (
        <div className='pick-side'>
            <h1 className='pick-side__title'>{side}</h1>
            <div className='pick-side__body'>
                {getSide().map((block) =>
                    <PickBlock key={block} orderNumber={block}/>
                )}
            </div>
        </div>
    );
};

export default PickSide;