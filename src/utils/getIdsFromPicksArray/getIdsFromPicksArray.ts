import {IPickedHero} from "../../types/IHeroes.ts";

export function getIdsFromPicksArray(picksArray: IPickedHero[]):number[] {
    const idArray:number[] = []
    picksArray.forEach((hero) => {
        idArray.push(hero.hero.id)
    })
    return idArray
}