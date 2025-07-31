import {describe, expect, test} from "@jest/globals";
import {getRandomNumber} from "./getRandomNumber";

describe('randomNumber', () => {
    test('Коллбэк является числом', () => {
        expect(getRandomNumber(100)).toBeDefined()
        expect(typeof getRandomNumber(100)).toStrictEqual('number');
    })
})