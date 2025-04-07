import {IHeroes} from "../types/IHeroes.ts";


export function sortStrHeroes(heroes:IHeroes[]):IHeroes[] {
    const strHeroes:IHeroes[] = [];
    for (let i = 0; i < heroes.length; i++) {
        if (heroes[i].primary_attr === 0) {
            strHeroes.push(heroes[i]);
        }
    }
    return strHeroes
}
export function sortAgiHeroes(heroes:IHeroes[]):IHeroes[] {
    const agiHeroes:IHeroes[] = [];
    for (let i = 0; i < heroes.length; i++) {
        if (heroes[i].primary_attr === 1) {
            agiHeroes.push(heroes[i]);
        }
    }
    return agiHeroes
}
export function sortIntHeroes(heroes:IHeroes[]):IHeroes[] {
    const intHeroes:IHeroes[] = [];
    for (let i = 0; i < heroes.length; i++) {
        if (heroes[i].primary_attr === 2) {
            intHeroes.push(heroes[i]);
        }
    }
    return intHeroes
}
export function sortUniHeroes(heroes:IHeroes[]):IHeroes[] {
    const uniHeroes:IHeroes[] = [];
    for (let i = 0; i < heroes.length; i++) {
        if (heroes[i].primary_attr === 3) {
            uniHeroes.push(heroes[i]);
        }
    }
    return uniHeroes
}

// export function sortHeroesByAttribute(heroes:IHeroes[]) {
//
// }