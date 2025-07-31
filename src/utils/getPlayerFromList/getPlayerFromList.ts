import {Player} from "../../models/Player";

export function getPlayerFromList(list: Player[], count: number): Player | null {
    return list[count]? list[count] : null;
}