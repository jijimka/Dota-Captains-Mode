import {PickOrder} from "../../models/PickOrder.ts";

export function getNearestPickNumber(pickQueue: number[]): number | null {
    for (let i = 0; i < pickQueue.length; i++) {
        if (PickOrder.picks.includes(pickQueue[i])) {
            return pickQueue[i];
        }
    }
    return null;
}