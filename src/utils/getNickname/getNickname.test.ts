import {getNickname} from './getNickname'
import {describe, expect, test} from "@jest/globals";


describe("nickname shorter", () => {
    test('Укорачивает никнейм', () => {
        expect(getNickname('1234567890123456')).toStrictEqual(['12345678...',true]);
    })
    test('Не укорачивает никнейм', () => {
        expect(getNickname('123456')).toStrictEqual(['123456',false])
    })
    test('Крайний кейс укорачивания',() => {
      expect(getNickname('12345678901')).toStrictEqual(['12345678...',true])
    })
    test('Крайний кейс не укорачивания',() => {
      expect(getNickname('1234567890')).toStrictEqual(['1234567890',false])
    })

})
