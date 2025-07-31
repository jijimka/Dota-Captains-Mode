import {getBoxClasses} from './getBoxClasses'
import {describe, expect, test} from "@jest/globals";

describe('getBoxClasses', () => {
    test('Редиант, очередь блока', () => {
        expect(getBoxClasses('radiant',1,1)).toStrictEqual(['pick-box','pick-box__radiant','pick-box__active-radiant'])
    })
    test('Редиант, очередь не дошла до блока', () => {
        expect(getBoxClasses('radiant',2,1)).toStrictEqual(['pick-box','pick-box__radiant'])
    })
    test('Редиант, очередь прошла блок', () => {
        expect(getBoxClasses('radiant',1,2)).toStrictEqual(['pick-box','pick-box__radiant','pick-box__passed-radiant'])
    })
    test('Дайр, очередь блока', () => {
        expect(getBoxClasses('dire',1,1)).toStrictEqual(['pick-box','pick-box__dire','pick-box__active-dire'])
    })
    test('Дайр, очередь не дошла до блока', () => {
        expect(getBoxClasses('dire',2,1)).toStrictEqual(['pick-box','pick-box__dire'])
    })
    test('Дайр, очередь прошла блок', () => {
        expect(getBoxClasses('dire',1,2)).toStrictEqual(['pick-box','pick-box__dire','pick-box__passed-dire'])
    })
})