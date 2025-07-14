import {Player} from "../models/Player.ts";

export function getRandomPlayer(playerId: number): Player {
    const randomNumber: number = Math.floor(Math.random() * (6 - 1) + 1)
    const roles: number[] = []

    for (let i = 0; i < randomNumber; i++) {
        const randomRole = Math.floor(Math.random() * (6 - 1) + 1)
        if (roles.includes(randomRole)) {
            continue;
        }
        roles.push(randomRole)
    }
    roles.sort((a, b) => a - b)
    return new Player(`aboba ${playerId}`, Math.floor(Math.random() * 10000), roles)
}
