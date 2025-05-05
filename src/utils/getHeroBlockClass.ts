import {IHeroes, IPickedHero} from "../types/IHeroes.ts";

export function isHeroPicked(pickedHeroes:IPickedHero[],hero:IHeroes): boolean {
    return pickedHeroes.find((pickedHero) => pickedHero.hero.id === hero.id) !== undefined
}

export function isHeroBanned(pickedHeroes:IPickedHero[],hero:IHeroes):boolean {
    const picks = [8, 9, 13, 14, 15, 16, 17, 18, 23, 24]
    const foundHero = pickedHeroes.find((pickedHero) => pickedHero.hero.id === hero.id)
    if (foundHero === undefined) return false
    return !picks.includes(foundHero.pick)
}

export function getHeroBlockClass(pickedHeroes:IPickedHero[],hero:IHeroes,searchedHero:number[] | null) {
    const classes:string[] = []
    if (isHeroPicked(pickedHeroes,hero)) {
        if (isHeroBanned(pickedHeroes,hero)) {
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