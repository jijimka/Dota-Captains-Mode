import {PickOrder} from "../../models/PickOrder.ts";

export function isBanTurn(selectedPick: number | null, pickQueue: number[]) {
    return !PickOrder.picks.includes(selectedPick ? selectedPick : pickQueue[0])
}