import {FC,} from 'react';
import {useTypedDispatch, useTypedSelector} from "../../hooks/redux.ts";
import {pickOrderSlice} from "../../store/slices/pickOrderSlice.ts";
import {getPickBlockClasses} from "../../utils/getPickBlockClasses/getPickBlockClasses.ts";
import {useDisplayPickedHero} from "../../hooks/useDisplayPickedHero.tsx";
import {PickOrder} from "../../models/PickOrder.ts";
import {useDisplaySuggestedHero} from "../../hooks/useDisplaySuggestedHero.tsx";

interface PickBlockProps {
    orderNumber: number;
}

const PickBlock: FC<PickBlockProps> = ({orderNumber}) => {
    const dispatch = useTypedDispatch()
    const orderClasses = ['pick__block-order']
    const {pickQueue, selectedPick,} = useTypedSelector(state => state.pickOrder)
    const {isSynergyActive} = useTypedSelector(state => state.synergyData)
    const {selectPick,clearSelectedPick} = pickOrderSlice.actions
    const blockClasses = getPickBlockClasses(orderNumber, selectedPick, pickQueue)
    const displayPickedHero = useDisplayPickedHero(orderNumber)
    const displaySuggestedHero = useDisplaySuggestedHero(orderNumber)

    function selectPickOrder() {
        if (!pickQueue.includes(orderNumber)) return
        dispatch(selectPick(orderNumber))
        if (orderNumber === pickQueue[0]) {
            dispatch(clearSelectedPick())
        }
    }



    if (PickOrder.dire.includes(orderNumber)) {
        orderClasses.push('pick__block-order-dire')
    }
    return (
        <div onClick={selectPickOrder} className='pick-side__block'>
            <div className={blockClasses.join(' ')}>
                {isSynergyActive?displaySuggestedHero:displayPickedHero}
            </div>
            <div className={orderClasses.join(' ')}>{orderNumber}</div>
        </div>
    );
};

export default PickBlock;