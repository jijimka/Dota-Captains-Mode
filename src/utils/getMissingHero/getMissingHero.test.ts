import {describe, expect, test} from "@jest/globals";
import {getMissingHero} from "./getMissingHero";
import {ISynergy} from "../../types/ISynergy";

describe('getMissingHero', () => {
    const FullArray: ISynergy[] = [
        {
            heroId2: 1,
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
    const arrayWithMissingHero: ISynergy[] = [
        {
            heroId2: 1,
            synergy: 1,
        },
        {
            heroId2: 2,
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
    const missingHero:ISynergy = {
        heroId2: 3,
        synergy: 1,
    }
    test('expect to return missing hero', () => {
        expect(getMissingHero(arrayWithMissingHero, FullArray)).toBe(missingHero)
    })
    test('arrays are identical', () => {
        expect(getMissingHero(FullArray,FullArray)).toBe(undefined)
    })
})