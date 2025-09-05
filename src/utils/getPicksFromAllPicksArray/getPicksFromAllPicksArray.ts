import {IPickedHero} from "../../types/IHeroes.ts";
import {PickOrder} from "../../models/PickOrder.ts";

export function getPicksFromAllPicksArray(picksArray:IPickedHero[]):IPickedHero[] {
    const picks:IPickedHero[] = []
    picksArray.forEach(hero => {
        PickOrder.picks.includes(hero.pick)? picks.push(hero) : null
    })
    return picks
}