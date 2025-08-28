import {ISynergy} from "../../types/ISynergy.ts";

export function getHeroFromSynergyList(list:ISynergy[],heroId:number):ISynergy | null {
    const filteredList = list.filter((synergy) => {
        return synergy.heroId2 === heroId
    })
    return filteredList[0]??null;
}