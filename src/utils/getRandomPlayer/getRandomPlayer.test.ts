import {describe, expect, test} from "@jest/globals";
import {getRandomPlayer} from "./getRandomPlayer";
import {Player} from "../../models/Player";

describe('getRandomPlayer', () => {
    test('return value is player', () => {
        expect(getRandomPlayer(1)).toBeInstanceOf(Player)
    })
})