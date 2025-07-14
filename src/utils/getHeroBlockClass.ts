import {IHeroes, IPickedHero} from "../types/IHeroes.ts";
import {isHeroPicked} from "./isHeroPicked.ts";
import {isHeroBanned} from "./isHeroBanned.ts";


export function getHeroBlockClass(pickedHeroes: IPickedHero[], hero: IHeroes, searchedHero: number[] | null) {
    const classes: string[] = []
    if (isHeroPicked(pickedHeroes, hero)) {
        if (isHeroBanned(pickedHeroes, hero)) {
            classes.push('heroBanned')
        } else {
            classes.push('heroDisabled')
        }
    } else {
        classes.push('attribute__image-container')
    }
    if (searchedHero) {
        if (!searchedHero.includes(hero.id)) {
            classes.push('not-searched')
        }
    }

    return classes
}