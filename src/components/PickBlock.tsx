import {FC, useMemo} from 'react';
import {useTypedDispatch, useTypedSelector} from "../hooks/redux.ts";
import {pickOrderSlice} from "../store/slices/pickOrderSlice.ts";
import {pickedHeroSlice} from "../store/slices/pickedHeroSlice.ts";
import {IPickedHero} from "../types/IHeroes.ts";
interface PickBlockProps {
    orderNumber:number;
}
const PickBlock:FC<PickBlockProps> = ({orderNumber}) => {
    const dispatch = useTypedDispatch()
    const picks = [8,9,13,14,15,16,17,18,23,24]
    const dire = [2,3,5,6,9,12,13,16,17,20,21,24]
    const orderClasses = ['pick__block-order']
    const {pickedHeroes} = useTypedSelector(state => state.pickedHeroes)
    const pickNumber = useTypedSelector(state => state.pickOrder.pickOrder)
    const {pickQueue} = useTypedSelector(state => state.pickOrder)
    const blockClasses:string[] = []
    const {removePickedHero} = pickedHeroSlice.actions
    const {heroRemoved} = pickOrderSlice.actions

    const displayPickedHero = useMemo(() => {
        for (let i = 0; i < pickedHeroes.length; i++) {
            if (pickedHeroes[i].pick === orderNumber) {
                return (
                    <>
                        <img onClick={() => deleteHero(pickedHeroes[i])} className='pick__block-image' src={pickedHeroes[i].hero.image} />
                    </>
                )
            }
        }
        return <></>

    },[pickedHeroes])
    function deleteHero(hero:IPickedHero) {
        dispatch(removePickedHero(hero.hero))
        dispatch(heroRemoved(hero.pick))
    }
    if (!picks.includes(orderNumber)) {
        blockClasses.push('pick__block-ban')
    } else {
        blockClasses.push('pick__block')
    }
    if (pickQueue[0] === orderNumber) {
        blockClasses.push('pick-block__active')
    } else if (pickNumber === orderNumber && pickQueue.length === 0) {
        blockClasses.push('pick-block__active')
    }
    if (dire.includes(orderNumber)) {
        orderClasses.push('direOrder')
    }

    return (
        <div className='pick-side__block'>
            <div className={blockClasses.join(' ')}>
                {displayPickedHero}
            </div>
            <p className={orderClasses.join(' ')}>{orderNumber}</p>
        </div>
    );
};

export default PickBlock;