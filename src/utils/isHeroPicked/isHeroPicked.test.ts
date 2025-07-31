import {describe, expect, test} from "@jest/globals";
import {IHeroes, IPickedHero} from "../../types/IHeroes";
import {isHeroPicked} from "./isHeroPicked";

describe('isHeroPicked', () => {
    const hero: IHeroes = {
        "id": 1,
        "name": "npc_dota_hero_antimage",
        "name_loc": "Anti-Mage",
        "name_english_loc": "Anti-Mage",
        "primary_attr": 1,
        "complexity": 1,
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png",
        "attribute_img": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png"
    }
    const pickedHeroesPicked: IPickedHero[] = [
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
            pick: 8,
        },
        {
            hero: {
                "id": 2,
                "name": "npc_dota_hero_axe",
                "name_loc": "Axe",
                "name_english_loc": "Axe",
                "primary_attr": 0,
                "complexity": 1,
                "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/axe.png",
                "attribute_img": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png"
            },
            pick: 2
        }, {
            hero: {
                "id": 3,
                "name": "npc_dota_hero_bane",
                "name_loc": "Bane",
                "name_english_loc": "Bane",
                "primary_attr": 3,
                "complexity": 2,
                "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bane.png",
                "attribute_img": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_universal.png"

            },
            pick: 2
        }, {
            hero: {
                "id": 4,
                "name": "npc_dota_hero_bloodseeker",
                "name_loc": "Bloodseeker",
                "name_english_loc": "Bloodseeker",
                "primary_attr": 1,
                "complexity": 1,
                "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bloodseeker.png",
                "attribute_img": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png"
            },
            pick: 2
        },
    ]
    const pickedHeroesBanned: IPickedHero[] = [

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
            pick: 1,
        },
        {
            hero: {
                "id": 2,
                "name": "npc_dota_hero_axe",
                "name_loc": "Axe",
                "name_english_loc": "Axe",
                "primary_attr": 0,
                "complexity": 1,
                "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/axe.png",
                "attribute_img": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png"
            },
            pick: 2
        }, {
            hero: {
                "id": 3,
                "name": "npc_dota_hero_bane",
                "name_loc": "Bane",
                "name_english_loc": "Bane",
                "primary_attr": 3,
                "complexity": 2,
                "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bane.png",
                "attribute_img": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_universal.png"

            },
            pick: 2
        }, {
            hero: {
                "id": 4,
                "name": "npc_dota_hero_bloodseeker",
                "name_loc": "Bloodseeker",
                "name_english_loc": "Bloodseeker",
                "primary_attr": 1,
                "complexity": 1,
                "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bloodseeker.png",
                "attribute_img": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png"
            },
            pick: 2
        },
    ]
    const pickedHeroesNot: IPickedHero[] = [
        {
            hero: {
                "id": 2,
                "name": "npc_dota_hero_axe",
                "name_loc": "Axe",
                "name_english_loc": "Axe",
                "primary_attr": 0,
                "complexity": 1,
                "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/axe.png",
                "attribute_img": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png"
            },
            pick: 2
        }, {
            hero: {
                "id": 3,
                "name": "npc_dota_hero_bane",
                "name_loc": "Bane",
                "name_english_loc": "Bane",
                "primary_attr": 3,
                "complexity": 2,
                "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bane.png",
                "attribute_img": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_universal.png"

            },
            pick: 2
        }, {
            hero: {
                "id": 4,
                "name": "npc_dota_hero_bloodseeker",
                "name_loc": "Bloodseeker",
                "name_english_loc": "Bloodseeker",
                "primary_attr": 1,
                "complexity": 1,
                "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bloodseeker.png",
                "attribute_img": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png"
            },
            pick: 2
        },
    ]

    test('hero picked', () => {
        expect(isHeroPicked(pickedHeroesPicked,hero)).toBe(true)
    })
    test('hero banned', () => {
        expect(isHeroPicked(pickedHeroesBanned,hero)).toBe(true)
    })
    test('hero not found', () => {
        expect(isHeroPicked(pickedHeroesNot,hero)).toBe(false)
    })
})