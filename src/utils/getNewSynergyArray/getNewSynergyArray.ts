import {ISynergy} from "../../types/ISynergy.ts";
import {incrementSynergyValue} from "../incrementSynergyValue/incrementSynergyValue.ts";
import {getHeroFromSynergyList} from "../getHeroFromSynergyList/getHeroFromSynergyList.ts";
import {decrementSynergyValue} from "../decrementSynergyValue/decrementSynergyValue.ts";
import {getMissingHero} from "../getMissingHero/getMissingHero.ts";

export function getNewSynergyArray(newVsSynergyValueArray:ISynergy[],newWithSynergyValueArray:ISynergy[],oldVsSynergyValueArray:ISynergy[],oldWithSynergyValueArray:ISynergy[],isHeroRemoved?:boolean | undefined) {
    const getSynergyValue = isHeroRemoved ? decrementSynergyValue : incrementSynergyValue
    let count = 0
    const vsArray: ISynergy[] = []
    const withArray: ISynergy[] = []

    while (count < newVsSynergyValueArray.length || count < newWithSynergyValueArray.length) {
        const vsArrayElement: ISynergy | undefined = newVsSynergyValueArray[count]
        const withArrayElement: ISynergy | undefined = newWithSynergyValueArray[count]
        if (vsArrayElement) {
            const newSynergy = getSynergyValue(getHeroFromSynergyList(oldVsSynergyValueArray, vsArrayElement.heroId2)?.synergy ?? 0, vsArrayElement.synergy * -1)
            const obj: ISynergy = {
                heroId2: vsArrayElement.heroId2,
                synergy: newSynergy,
            }
            vsArray.push(obj)
        }
        if (withArrayElement) {
            const newSynergy = getSynergyValue(getHeroFromSynergyList(oldWithSynergyValueArray, withArrayElement.heroId2)?.synergy ?? 0, withArrayElement.synergy)
            const obj: ISynergy = {
                heroId2: withArrayElement.heroId2,
                synergy: newSynergy,
            }
            withArray.push(obj)
        }
        count += 1
    }
    const vsArrayMissingHero = getMissingHero(newVsSynergyValueArray,oldVsSynergyValueArray)
    const withArrayMissingHero = getMissingHero(newWithSynergyValueArray,oldWithSynergyValueArray)
    if (vsArrayMissingHero && withArrayMissingHero) {
        vsArray.push(vsArrayMissingHero)
        withArray.push(withArrayMissingHero)
    }

    return [vsArray, withArray]
}
