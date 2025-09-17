import {ISynergy} from "../../types/ISynergy.ts";
import {getHeroFromSynergyList} from "../getHeroFromSynergyList/getHeroFromSynergyList.ts";

export function getMissingHero(newArray: ISynergy[], oldArray: ISynergy[]): ISynergy | null {
    const oldArrayIds:number[] = []
    const newArrayIds:number[] = []
    oldArray.forEach((synergy) => {
        oldArrayIds.push(synergy.heroId2)
    })
    newArray.forEach((synergy) => {
        newArrayIds.push(synergy.heroId2)
    })
    for (let i = 0; i < oldArrayIds.length; i++) {
        if (!newArrayIds.includes(oldArrayIds[i])) {
            return getHeroFromSynergyList(oldArray,oldArrayIds[i])
        }
    }
    return null
}
