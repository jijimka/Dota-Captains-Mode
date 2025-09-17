import {describe, expect, test} from "@jest/globals";
import {incrementSynergyValue} from "./incrementSynergyValue";

describe('incrementSynergyValue', () => {
    test('positive numbers',() => {
        expect(incrementSynergyValue(2,1)).toBe(3)
    })
    test('negative numbers',() => {
        expect(incrementSynergyValue(2,-1)).toBe(1)
    })
    test('float numbers, positive',() => {
        expect(incrementSynergyValue(0.1,0.2)).toBe(0.3)
    })
    test('float numbers, negative',() => {
        expect(incrementSynergyValue(0.3,-0.2)).toBe(0.1)
    })
})
