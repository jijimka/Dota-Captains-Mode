import {PickTurns} from "../models/PickTurns.ts";

export function getSidePickTurn(turn: number) {
    return PickTurns.pickOrder[turn] === 'radiant'
}