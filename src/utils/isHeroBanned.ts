import {IHeroes, IPickedHero} from "../types/IHeroes.ts";
import {PickOrder} from "../models/PickOrder.ts";

export function isHeroBanned(pickedHeroes: IPickedHero[], hero: IHeroes): boolean {
    const foundHero = pickedHeroes.find((pickedHero) => pickedHero.hero.id === hero.id)
    if (foundHero === undefined) return false
    return !PickOrder.picks.includes(foundHero.pick)
}