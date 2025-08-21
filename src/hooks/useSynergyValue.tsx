import {useMemo} from "react";
import {isBanTurn} from "../utils/isBanTurn/isBanTurn.ts";
import {PickOrder} from "../models/PickOrder.ts";
import {useTypedSelector} from "./redux.ts";
import {getHeroFromSynergyList} from "../utils/getHeroFromSynergyList/getHeroFromSynergyList.ts";

export const useSynergyValue = (heroId:number) => {
    const {
        radiantAdvantageVs,
        radiantAdvantageWith,
        direAdvantageWith,
        direAdvantageVs,
    } = useTypedSelector(state => state.synergyData)
    const {pickQueue, selectedPick} = useTypedSelector(state => state.pickOrder)

    let advantageVs: number
    let advantageWith: number
    let overall: number


    function direSynergyValue() {
        advantageVs = getHeroFromSynergyList(direAdvantageVs, heroId)?.synergy ?? 0
        advantageWith = getHeroFromSynergyList(direAdvantageWith, heroId)?.synergy ?? 0
        overall = +(advantageVs + advantageWith).toFixed(1)
    }

    function radiantSynergyValue() {
        advantageVs = getHeroFromSynergyList(radiantAdvantageVs, heroId)?.synergy ?? 0
        advantageWith = getHeroFromSynergyList(radiantAdvantageWith, heroId)?.synergy ?? 0
        overall = +(advantageVs + advantageWith).toFixed(1)
    }

    const value = useMemo(() => {
        const isThisBanTurn = isBanTurn(selectedPick, pickQueue)
        const isRadiantTurn = PickOrder.radiant.includes(selectedPick ?? pickQueue[0])

        if (isRadiantTurn) {
            if (isThisBanTurn) {
                direSynergyValue()
            } else {
                radiantSynergyValue()
            }
        } else {
            if (isThisBanTurn) {
                radiantSynergyValue()
            } else {
                direSynergyValue()
            }
        }
        return [advantageVs,advantageWith,overall]
    },[pickQueue, selectedPick, radiantAdvantageWith, direAdvantageWith])
    return value
}