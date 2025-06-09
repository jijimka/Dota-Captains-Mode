import {IHeroes, IPickedHero} from "../types/IHeroes.ts";

export function isHeroPicked(pickedHeroes:IPickedHero[],hero:IHeroes): boolean {
    return pickedHeroes.find((pickedHero) => pickedHero.hero.id === hero.id) !== undefined
}