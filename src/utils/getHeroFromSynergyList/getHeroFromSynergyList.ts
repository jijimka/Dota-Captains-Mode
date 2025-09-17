import {ISynergy} from "../../types/ISynergy.ts";

export function getHeroFromSynergyList(list:ISynergy[],heroId:number):ISynergy | null {
    for (let i = 0; i < list.length; i++) {
        if (list[i].heroId2 === heroId) {
            return list[i];
        }
    }
    return null;
}