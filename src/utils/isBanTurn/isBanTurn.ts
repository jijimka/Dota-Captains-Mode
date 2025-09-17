import {PickOrder} from "../../models/PickOrder";

export function isBanTurn(pickNumber:number) {
    return !PickOrder.picks.includes(pickNumber)
}