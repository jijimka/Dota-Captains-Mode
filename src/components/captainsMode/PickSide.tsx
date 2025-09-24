import {FC, useMemo} from 'react';
import PickBlock from "./PickBlock.tsx";
import {PickOrder} from "../../models/PickOrder.ts";
import {useTypedSelector} from "../../hooks/redux.ts";

interface PickSideProps {
    side: string;
}

const PickSide: FC<PickSideProps> = ({side}) => {
    const {selectedPick, pickQueue} = useTypedSelector(state => state.pickOrder)
    const [radiant,dire] = useTypedSelector(state => state.settingsCM.teamNames)
    const {radiantFirst} = useTypedSelector(state => state.settingsCM)
    function getTeamName() {
        return side === 'Radiant' ? radiant : dire
    }
    const sideTitleClasses = useMemo(() => {
        const isRadiantTurn = PickOrder.radiant.includes(selectedPick ?? pickQueue[0])
        const array: string[] = [side === 'Radiant' ? 'pick-side__title-radiant' : 'pick-side__title-dire']

        if (isRadiantTurn && side === 'Radiant') {
            array.push('title__active-radiant')
        }
        if (!isRadiantTurn && side === 'Dire') {
            array.push('title__active-dire')
        }
        return array
    }, [selectedPick, pickQueue,])

    function getSide(): number[] {
        if (side === 'Radiant') {
            return radiantFirst? PickOrder.radiant : PickOrder.dire
        } else {
            return radiantFirst? PickOrder.dire : PickOrder.radiant
        }
    }

    return (
        <div className='pick-side'>
            <h1 className='pick-side__title'><span className={sideTitleClasses.join(' ')}>{getTeamName()}</span></h1>
            <div className='pick-side__body'>
                {getSide().map((block) =>
                    <PickBlock key={block} orderNumber={block}/>
                )}
            </div>
        </div>
    );
};

export default PickSide;