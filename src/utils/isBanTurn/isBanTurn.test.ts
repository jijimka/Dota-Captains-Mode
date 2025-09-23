import {describe, expect, test} from "@jest/globals";
import {isBanTurn} from "./isBanTurn";

describe('isBanTurn',() => {
    test('expect true', () => {
        expect(isBanTurn(1)).toBe(true)
    })
    test('expect false', () => {
        expect(isBanTurn(8)).toBe(false)
    })
    test('close range, expect true', () => {
        expect(isBanTurn(7)).toBe(true)
    })
    test('close range, expect true', () => {
        expect(isBanTurn(10)).toBe(true)
    })
})