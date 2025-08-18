import {FC,} from 'react';
import {useTypedDispatch, useTypedSelector} from "../../hooks/redux.ts";
import {pickOrderSlice} from "../../store/slices/pickOrderSlice.ts";
import {pickedHeroSlice} from "../../store/slices/pickedHeroSlice.ts";
import {IPickedHero} from "../../types/IHeroes.ts";
import {getPickBlockClasses} from "../../utils/getPickBlockClasses/getPickBlockClasses.ts";
import {useDisplayPickedHero} from "../../hooks/useDisplayPickedHero.tsx";
import {PickOrder} from "../../models/PickOrder.ts";

interface PickBlockProps {
    orderNumber: number;
}

const PickBlock: FC<PickBlockProps> = ({orderNumber}) => {
    const dispatch = useTypedDispatch()
    const orderClasses = ['pick__block-order']
    const {pickedHeroes} = useTypedSelector(state => state.pickedHeroes)
    const {pickQueue, selectedPick,} = useTypedSelector(state => state.pickOrder)
    const {removePickedHero} = pickedHeroSlice.actions
    const {selectPick, addPickQueue, clearSelectedPick} = pickOrderSlice.actions
    const blockClasses = getPickBlockClasses(orderNumber, selectedPick, pickQueue)
    const displayPickedHero = useDisplayPickedHero(pickedHeroes, orderNumber, deleteHero)


    function deleteHero(hero: IPickedHero) {
        dispatch(removePickedHero(hero.hero))
        dispatch(addPickQueue(hero.pick))
    }

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
                {displayPickedHero}
            </div>
            <div className={orderClasses.join(' ')}>{orderNumber}</div>
        </div>
    );
};

export default PickBlock;