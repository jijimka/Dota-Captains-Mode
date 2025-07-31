import {afterEach, describe, expect, test} from "@jest/globals";
import {getPlayerFromList} from "./getPlayerFromList";
import {Player} from "../../models/Player";

describe("getPlayerFromList", () => {
    let playersList:Player[] = []
    function fillPlayers() {
        for (let i = 0; i < 5; i++) {
            playersList.push(new Player(`${i}`,null,[null]))
        }
    }


    test("player found", () => {
        fillPlayers();
        expect(getPlayerFromList(playersList,2)).toBeInstanceOf(Player);
    })
    test('player not found', () => {
        fillPlayers();
        expect(getPlayerFromList(playersList,6)).toStrictEqual(null);
    })
    test('list is empty', () => {
        expect(getPlayerFromList(playersList,1)).toStrictEqual(null)
    })

    afterEach(() => {
        playersList = []
    })
})