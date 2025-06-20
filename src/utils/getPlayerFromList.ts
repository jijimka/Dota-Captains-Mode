import {Player} from "../models/Player.ts";

export function getPlayerFromList(list:Player[],count:number):Player | null {
    return list[count] === undefined ? null : list[count];
}