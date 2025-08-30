import {useMemo} from "react";
import {IHeroes} from "../types/IHeroes.ts";
import {useTypedSelector} from "./redux.ts";
import {PickOrder} from "../models/PickOrder.ts";
import {getSynergyArrayFromHeroArray} from "../utils/getSynergyArrayFromHeroArray/getSynergyArrayFromHeroArray.ts";
import {IHeroSynergy} from "../types/IHeroSynergy.ts";
import HeroBlock from "../components/captainsMode/HeroBlock.tsx";
import HeroesList from "../components/captainsMode/HeroesList.tsx";
import {isBanTurn} from "../utils/isBanTurn/isBanTurn.ts";
import {SortList} from "../models/SortList.ts";

export const useSortedBySynergyHeroList = (heroList: IHeroes[]) => {
    const {sortBy} = useTypedSelector(state => state.settingsCM)
    const {
        radiantAdvantageVs,
        radiantAdvantageWith,
        direAdvantageWith,
        direAdvantageVs,
        isSynergyActive,
    } = useTypedSelector(state => state.synergyData)
    const {pickQueue, selectedPick} = useTypedSelector(state => state.pickOrder)
    const isThisBanTurn = isBanTurn(selectedPick, pickQueue)
    const isRadiantSide = PickOrder.radiant.includes(selectedPick ?? pickQueue[0])
    const isSortActive = sortBy === SortList.synergy
    const sortedHeroes = useMemo(() => {
        let newHeroList: IHeroSynergy[]
        if (isRadiantSide) {
            if (isThisBanTurn) {
                newHeroList = getSynergyArrayFromHeroArray(heroList, direAdvantageVs, direAdvantageWith)
            } else {
                newHeroList = getSynergyArrayFromHeroArray(heroList, radiantAdvantageVs, radiantAdvantageWith)
            }
        } else {
            if (isThisBanTurn) {
                newHeroList = getSynergyArrayFromHeroArray(heroList, radiantAdvantageVs, radiantAdvantageWith)
            } else {
                newHeroList = getSynergyArrayFromHeroArray(heroList, direAdvantageVs, direAdvantageWith)
            }
        }

        return newHeroList.sort((a, b) => b.synergy - a.synergy)
    }, [isRadiantSide, radiantAdvantageVs, direAdvantageVs,isThisBanTurn,isSortActive])
    return isSynergyActive && isSortActive ?
        sortedHeroes.map((hero) =>
            <HeroBlock hero={hero.hero}/>
        )
        :
        <HeroesList heroesList={heroList}/>
}
