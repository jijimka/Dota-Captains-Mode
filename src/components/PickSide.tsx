import {FC} from 'react';
import PickBlock from "./PickBlock.tsx";

interface PickSideProps {
    side: 'Radiant' | 'Dire'
}

const PickSide: FC<PickSideProps> = ({side}) => {

    function getSide(): number[] {
        const radiant = [1, 4, 7, 8, 10, 11, 14, 15, 18, 19, 22, 23]
        const dire = [2, 3, 5, 6, 9, 12, 13, 16, 17, 20, 21, 24]
        if (side === 'Radiant') {
            return radiant
        }
        return dire
    }

    return (
        <div className='pick-side'>
            <h1 className='pick-side__title'>{side}</h1>
            <div className='pick-side__body'>
                {getSide().map((block) =>
                    <PickBlock orderNumber={block}/>
                )}
            </div>
        </div>
    );
};

export default PickSide;