import {PickTurns} from "../models/PickTurns.ts";

export function getBoxClasses(boxSide:'radiant' | 'dire',boxNumber:number) {
    const boxClasses = [
        'pick-box',
    ]

    if (boxSide === 'radiant') {
        if (PickTurns.isBoxActive(boxNumber)) {
            boxClasses.push('pick-box__active-radiant')
        }
        if (PickTurns.turn > boxNumber) {
            boxClasses.push('pick-box__passed-radiant')
        }
        boxClasses.push('pick-box__radiant')
    } else {
        if (PickTurns.isBoxActive(boxNumber)) {
            boxClasses.push('pick-box__active-dire')
        }
        if (PickTurns.turn > boxNumber) {
            boxClasses.push('pick-box__passed-dire')
        }
        boxClasses.push('pick-box__dire')
    }

    return boxClasses
}