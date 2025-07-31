import {describe, expect, test} from "@jest/globals";
import {getPickBlockClasses} from "./getPickBlockClasses";

describe('getPickBlockClasses', () => {
    const pickQueueTrue = [8,9,10,11,12]
    const pickQueueFalse = [1,2,3,4,5,6]

    test('Пик блок активен', () => {
        expect(getPickBlockClasses(8,null,pickQueueTrue)).toStrictEqual(['pick__block','pick-block__active'])
    })
    test('Пик блок не активен', () => {
        expect(getPickBlockClasses(8,null,pickQueueFalse)).toStrictEqual(['pick__block'])
    })
    test('Бан блок активен', () => {
        expect(getPickBlockClasses(1,null,pickQueueFalse)).toStrictEqual(['pick__block-ban','pick-block__active'])
    })
    test('Бан блок не активен', () => {
        expect(getPickBlockClasses(1,null,pickQueueTrue)).toStrictEqual(['pick__block-ban'])
    })
    test('Пик блок выбран', () => {
        expect(getPickBlockClasses(8,8,pickQueueFalse)).toStrictEqual(['pick__block','pick-block__selected'])
    })
    test('Бан блок выбран', () => {
        expect(getPickBlockClasses(1,1,pickQueueTrue)).toStrictEqual(['pick__block-ban','pick-block__selected'])
    })
})