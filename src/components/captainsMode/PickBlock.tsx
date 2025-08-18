import {FC, useMemo,} from 'react';
import {useTypedDispatch, useTypedSelector} from "../../hooks/redux.ts";
import {pickOrderSlice} from "../../store/slices/pickOrderSlice.ts";
import {pickedHeroSlice} from "../../store/slices/pickedHeroSlice.ts";
import {IHeroes, IPickedHero} from "../../types/IHeroes.ts";
import {getPickBlockClasses} from "../../utils/getPickBlockClasses/getPickBlockClasses.ts";
import {useDisplayPickedHero} from "../../hooks/useDisplayPickedHero.tsx";
import {PickOrder} from "../../models/PickOrder.ts";
import {getMvpHero} from "../../utils/getMvpHero/getMvpHero.ts";
import {getHeroFromId} from "../../utils/getHeroFromId/getHeroFromId.ts";
import dotaHeroes from '../../../dotaHeroes.json'
import HeroImage from "../UI/HeroImage/HeroImage.tsx";
import {getNearestPickNumber} from "../../utils/getNearestPickNumber/getNearestPickNumber.ts";

interface PickBlockProps {
    orderNumber: number;
}

const PickBlock: FC<PickBlockProps> = ({orderNumber}) => {
    const dispatch = useTypedDispatch()
    const orderClasses = ['pick__block-order']
    const {pickedHeroes} = useTypedSelector(state => state.pickedHeroes)
    const {pickQueue, selectedPick,} = useTypedSelector(state => state.pickOrder)
    const {
        radiantAdvantageVs,
        radiantAdvantageWith,
        direAdvantageWith,
        direAdvantageVs
    } = useTypedSelector(state => state.synergyData)
    const {removePickedHero} = pickedHeroSlice.actions
    const {selectPick, addPickQueue, clearSelectedPick} = pickOrderSlice.actions
    const blockClasses = getPickBlockClasses(orderNumber, selectedPick, pickQueue)
    const displayPickedHero = useDisplayPickedHero(pickedHeroes, orderNumber, deleteHero)
    const isThisNextPick: boolean = selectedPick ? selectedPick === orderNumber : pickQueue[0] === orderNumber
    const isThisRadiantSide: boolean = PickOrder.radiant.includes(orderNumber)

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
    console.log(getNearestPickNumber(pickQueue))
    const displaySuggestedHero = useMemo(() => {
        if (getNearestPickNumber(pickQueue) !== orderNumber) return displayPickedHero
        if (getNearestPickNumber(pickQueue) === 8) return displayPickedHero
        if (isThisRadiantSide) {
            const heroId: number = getMvpHero(radiantAdvantageVs, radiantAdvantageWith,pickedHeroes)?.heroId2
            const hero: IHeroes | null = getHeroFromId(dotaHeroes, heroId)
            if (!hero) return
            return (
                <>
                    <HeroImage hero={hero} grayScale={true}/>
                </>
            )
        } else {
            const heroId: number = getMvpHero(direAdvantageVs, direAdvantageWith,pickedHeroes)?.heroId2
            const hero: IHeroes | null = getHeroFromId(dotaHeroes, heroId)
            if (!hero) return
            return (
                <>
                    <HeroImage hero={hero} grayScale={true}/>
                </>
            )
        }
    }, [isThisNextPick,radiantAdvantageVs, radiantAdvantageWith,direAdvantageVs, direAdvantageWith])

    if (PickOrder.dire.includes(orderNumber)) {
        orderClasses.push('pick__block-order-dire')
    }
    return (
        <div onClick={selectPickOrder} className='pick-side__block'>
            <div className={blockClasses.join(' ')}>
                {displaySuggestedHero}
            </div>
            <div className={orderClasses.join(' ')}>{orderNumber}</div>
        </div>
    );
};

export default PickBlock;