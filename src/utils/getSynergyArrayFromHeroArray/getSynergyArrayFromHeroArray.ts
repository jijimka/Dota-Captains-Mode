import {IHeroes} from "../../types/IHeroes.ts";
import {ISynergy} from "../../types/ISynergy.ts";
import {getHeroFromSynergyList} from "../getHeroFromSynergyList/getHeroFromSynergyList.ts";
import {IHeroSynergy} from "../../types/IHeroSynergy.ts";

export function getSynergyArrayFromHeroArray(heroesArray:IHeroes[],synergyVsArray:ISynergy[],synergyWithArray:ISynergy[]):IHeroSynergy[] {
    const response:IHeroSynergy[] = []
    heroesArray.forEach(hero => {
        const heroSynergyVs = getHeroFromSynergyList(synergyVsArray,hero.id)
        const heroSynergyWith = getHeroFromSynergyList(synergyWithArray,hero.id)
        if (!heroSynergyVs || !heroSynergyWith) return
        let object:IHeroSynergy = {
            hero: hero,
            synergy:+(heroSynergyVs?.synergy + heroSynergyWith?.synergy).toFixed(1)
        }
        response.push(object)
    })
    return response
}