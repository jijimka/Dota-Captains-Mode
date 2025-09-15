import {Player} from "../../models/Player";
import {getRandomNumber} from "../getRandomNumber/getRandomNumber";

export function getRandomPlayer(playerId: number): Player {
    const roles: number[] = []
    const maxRoles:number = 5
    const minRoles:number = 1
    const maxMmr:number = 10000
    const rolesExpectedLength = getRandomNumber(maxRoles,minRoles)

    while (roles.length < rolesExpectedLength) {
        const randomRole = getRandomNumber(maxRoles,minRoles)
        if (roles.includes(randomRole)) {
            continue;
        }
        roles.push(randomRole)
    }

    roles.sort((a, b) => a - b)
    return new Player(`Player ${playerId+1}`, getRandomNumber(maxMmr), roles)
}
