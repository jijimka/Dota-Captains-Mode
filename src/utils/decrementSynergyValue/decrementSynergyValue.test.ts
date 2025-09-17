import {describe, expect, test} from "@jest/globals";
import {decrementSynergyValue} from "./decrementSynergyValue";

describe('decrementSynergyValue', () => {
    test('positive value', () => {
        expect(decrementSynergyValue(2,1)).toBe(1)
    })
    test('negative value', () => {
        expect(decrementSynergyValue(1,2)).toBe(-1)
    })
    test('float numbers, positive', () => {
        expect(decrementSynergyValue(0.4,0.3)).toBe(0.1)
    })
    test('float numbers, negative', () => {
        expect(decrementSynergyValue(0.3,0.4)).toBe(-0.1)
    })
})