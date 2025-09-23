import {describe, expect, test} from "@jest/globals";
import {getMvpHero} from "./getMvpHero";
import {ISynergy} from "../../types/ISynergy";
import {IPickedHero} from "../../types/IHeroes";

describe('getMvpHero', () => {
    const defaultArray: ISynergy[] = [
        {
            heroId2: 6,
            synergy: 1,
        },
        {
            heroId2: 2,
            synergy: 7,
        },
        {
            heroId2: 3,
            synergy: 2,
        },
        {
            heroId2: 4,
            synergy: 5,
        },
        {
            heroId2: 5,
            synergy: 3,
        },
    ]
    const valuesAreEqualArray: ISynergy[] = [
        {
            heroId2: 6,
            synergy: 1,
        },
        {
            heroId2: 2,
            synergy: 1,
        },
        {
            heroId2: 3,
            synergy: 1,
        },
        {
            heroId2: 4,
            synergy: 1,
        },
        {
            heroId2: 5,
            synergy: 1,
        },
    ]
    const pickedHeroes: IPickedHero[] = [
        {
            hero: {
                "id": 1,
                "name": "npc_dota_hero_antimage",
                "name_loc": "Anti-Mage",
                "name_english_loc": "Anti-Mage",
                "primary_attr": 1,
                "complexity": 1,
                "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png",
                "attribute_img": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png"
            },
            pick: 1
        }
    ]
    const mostValueHero = {
        heroId2: 2,
        synergy: 14,
    }
    const equalValueHero:ISynergy = {
        heroId2: valuesAreEqualArray[0].heroId2,
        synergy: 2,
    }
    test('should return most valued hero', () => {
        expect(getMvpHero(defaultArray, defaultArray, pickedHeroes)).toStrictEqual(mostValueHero)
    })
    test('should return first element if all values are equal', () => {
        expect(getMvpHero(valuesAreEqualArray, valuesAreEqualArray, pickedHeroes)).toStrictEqual(equalValueHero)
    })
})