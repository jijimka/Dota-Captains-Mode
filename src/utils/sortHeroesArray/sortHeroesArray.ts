import {IHeroes} from "../../types/IHeroes.ts";

export function sortHeroesArray(heroList:IHeroes[]) {
    return [...heroList].sort((a, b) => a.name_loc.localeCompare(b.name_loc));
}