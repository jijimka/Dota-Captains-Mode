import {ISynergy} from "../../types/ISynergy.ts";
import {getHeroFromSynergyList} from "../getHeroFromSynergyList/getHeroFromSynergyList.ts";
import {IPickedHero} from "../../types/IHeroes.ts";

export function getMvpHero(vsArray: ISynergy[], withArray: ISynergy[],pickedHeroes:IPickedHero[]): ISynergy {
    const array:ISynergy[] = []
    vsArray.forEach(heroVsSynergy => {
        const heroWithSynergy = getHeroFromSynergyList(withArray,heroVsSynergy.heroId2)
        const heroWithValue = heroWithSynergy?.synergy ? heroWithSynergy?.synergy : 0
        const obj:ISynergy = {
            heroId2:heroVsSynergy.heroId2,
            synergy: +(heroVsSynergy.synergy + heroWithValue).toFixed(1),
        }
        array.push(obj)
    })
    const sortedArray:ISynergy[] = array.sort((a,b) => b.synergy - a.synergy)
    for (let i = 0; i < pickedHeroes?.length; i++) {
        if (pickedHeroes[i].hero.id === sortedArray[0].heroId2) {
            sortedArray.shift()
            i = 0
        }
    }
    return sortedArray[0]
}

//export function getMvpHero(vsArray: ISynergy[], withArray: ISynergy[]): ISynergy {
//     const array:ISynergy[] = []
//     vsArray.forEach(heroVsSynergy => {
//         const heroWithSynergy = getHeroFromSynergyList(withArray,heroVsSynergy.heroId2)
//         const heroWithValue = heroWithSynergy?.synergy ? heroWithSynergy?.synergy : 0
//         const obj:ISynergy = {
//             heroId2:heroVsSynergy.heroId2,
//             synergy: +(heroVsSynergy.synergy + heroWithValue).toFixed(1),
//         }
//         array.push(obj)
//     })
//     return array.sort((a,b) => b.synergy - a.synergy)[0]
// }