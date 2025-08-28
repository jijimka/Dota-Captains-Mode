import {PickOrder} from "../../models/PickOrder.ts";

export function isHaveAnyPicks(pickOrder:number[]) {
    let response = false
    PickOrder.picks.forEach((pick:number) => {
        if (!pickOrder.includes(pick)) {
            response = true
        }
    })
    return response
}