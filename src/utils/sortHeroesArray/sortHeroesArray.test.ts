import {describe, expect, test} from "@jest/globals";
import {IHeroes} from "../../types/IHeroes.ts";
import {sortHeroesArray} from "./sortHeroesArray.ts";

describe('sortHeroesArray', () => {
    const shuffledArray:IHeroes[] = [
        {
            "id": 6,
            "name": "npc_dota_hero_drow_ranger",
            "name_loc": "Drow Ranger",
            "name_english_loc": "Drow Ranger",
            "primary_attr": 1,
            "complexity": 1,
            "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/drow_ranger.png",
            "attribute_img": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png"
        },
        {
            "id": 3,
            "name": "npc_dota_hero_bane",
            "name_loc": "Bane",
            "name_english_loc": "Bane",
            "primary_attr": 3,
            "complexity": 2,
            "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bane.png",
            "attribute_img": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_universal.png"
        },
        {
            "id": 1,
            "name": "npc_dota_hero_antimage",
            "name_loc": "Anti-Mage",
            "name_english_loc": "Anti-Mage",
            "primary_attr": 1,
            "complexity": 1,
            "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png",
            "attribute_img": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png"
        },
    ]
    const sortedArray:IHeroes[] = [
        {
            "id": 1,
            "name": "npc_dota_hero_antimage",
            "name_loc": "Anti-Mage",
            "name_english_loc": "Anti-Mage",
            "primary_attr": 1,
            "complexity": 1,
            "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png",
            "attribute_img": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png"
        },
        {
            "id": 3,
            "name": "npc_dota_hero_bane",
            "name_loc": "Bane",
            "name_english_loc": "Bane",
            "primary_attr": 3,
            "complexity": 2,
            "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bane.png",
            "attribute_img": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_universal.png"
        },
        {
            "id": 6,
            "name": "npc_dota_hero_drow_ranger",
            "name_loc": "Drow Ranger",
            "name_english_loc": "Drow Ranger",
            "primary_attr": 1,
            "complexity": 1,
            "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/drow_ranger.png",
            "attribute_img": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png"
        },
    ]
    test('expect true', () => {
        expect(sortHeroesArray(shuffledArray)).toStrictEqual(sortedArray)
    })
    test('expect array', () => {
        expect(Array.isArray(sortHeroesArray(shuffledArray))).toBe(true)
    })
})