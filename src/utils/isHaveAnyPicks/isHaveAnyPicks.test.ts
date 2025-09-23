import {describe, expect, test} from "@jest/globals";
import {isHaveAnyPicks} from "./isHaveAnyPicks";

describe('isHaveAnyPicks', () => {
    test('false', () => {
        expect(isHaveAnyPicks([1,2,3,4,5,6,7,8,9,10,13,14,15,16,17,18,23,24])).toBe(false)
    })
    test('true', () => {
        expect(isHaveAnyPicks([1,2,3,4,5,6,7,10])).toBe(true)
    })
})