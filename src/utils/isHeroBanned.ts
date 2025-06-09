import {IHeroes, IPickedHero} from "../types/IHeroes.ts";

export function isHeroBanned(pickedHeroes:IPickedHero[],hero:IHeroes):boolean {
    const picks = [8, 9, 13, 14, 15, 16, 17, 18, 23, 24]
    const foundHero = pickedHeroes.find((pickedHero) => pickedHero.hero.id === hero.id)
    if (foundHero === undefined) return false
    return !picks.includes(foundHero.pick)
}