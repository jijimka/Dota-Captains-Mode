import {useMemo} from "react";
import {getMvpHero} from "../utils/getMvpHero/getMvpHero.ts";
import {IHeroes} from "../types/IHeroes.ts";
import {getHeroFromId} from "../utils/getHeroFromId/getHeroFromId.ts";
import dotaHeroes from "../../dotaHeroes.json";
import HeroImage from "../components/UI/HeroImage/HeroImage.tsx";
import {useTypedSelector} from "./redux.ts";
import {isBanTurn} from "../utils/isBanTurn/isBanTurn.ts";
import {useDisplayPickedHero} from "./useDisplayPickedHero.tsx";
import {PickOrder} from "../models/PickOrder.ts";
import {isHaveAnyPicks} from "../utils/isHaveAnyPicks/isHaveAnyPicks.ts";

export const useDisplaySuggestedHero = (orderNumber:number) => {
    const {pickedHeroes} = useTypedSelector(state => state.pickedHeroes)
    const {pickQueue, selectedPick,} = useTypedSelector(state => state.pickOrder)
    const isThisBanTurn = isBanTurn(selectedPick, pickQueue)
    const {
        radiantAdvantageVs,
        radiantAdvantageWith,
        direAdvantageWith,
        direAdvantageVs
    } = useTypedSelector(state => state.synergyData)
    const displayPickedHero = useDisplayPickedHero(orderNumber)
    const isThisNextPick: boolean = selectedPick ? selectedPick === orderNumber : pickQueue[0] === orderNumber
    const isThisRadiantSide: boolean = PickOrder.radiant.includes(orderNumber)

    const suggestedHero = useMemo(() => {
        if (!isThisNextPick) return displayPickedHero
        if (!isHaveAnyPicks(pickQueue)) return displayPickedHero
        if (isThisRadiantSide) {
            const heroId: number = isThisBanTurn ?
                getMvpHero(direAdvantageVs, direAdvantageWith, pickedHeroes)?.heroId2
                :
                getMvpHero(radiantAdvantageVs, radiantAdvantageWith, pickedHeroes)?.heroId2
            const hero: IHeroes | null = getHeroFromId(dotaHeroes, heroId)
            if (!hero) return
            return (
                <>
                    <HeroImage hero={hero} grayScale={true}/>
                </>
            )
        } else {
            const heroId: number = isThisBanTurn ?
                getMvpHero(radiantAdvantageVs, radiantAdvantageWith, pickedHeroes)?.heroId2
                :
                getMvpHero(direAdvantageVs, direAdvantageWith, pickedHeroes)?.heroId2
            const hero: IHeroes | null = getHeroFromId(dotaHeroes, heroId)
            if (!hero) return
            return (
                <>
                    <HeroImage hero={hero} grayScale={true}/>
                </>
            )
        }
    }, [isThisNextPick, radiantAdvantageVs, radiantAdvantageWith, direAdvantageVs, direAdvantageWith, pickedHeroes,displayPickedHero])
    return suggestedHero
}