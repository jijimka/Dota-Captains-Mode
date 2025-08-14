import {IHeroes} from "../../types/IHeroes";

export function getHeroFromId(heroList:IHeroes[],id:number):IHeroes | null {
    const filteredList = heroList.filter(hero => hero.id === id);
    return filteredList[0]??null;
}
