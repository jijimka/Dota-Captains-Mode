import {PickOrder} from "../models/PickOrder.ts";


export function getPickBlockClasses(orderNumber:number, selectedPick:number | null, pickQueue:number[]):string[] {
    const blockClasses: string[] = []
        if (!PickOrder.picks.includes(orderNumber)) {
            blockClasses.push('pick__block-ban')
        } else {
            blockClasses.push('pick__block')
        }

        if (selectedPick !== null && selectedPick === orderNumber) {
            blockClasses.push('pick-block__selected')
        }
        if (pickQueue[0] === orderNumber) {
            blockClasses.push('pick-block__active')
        }
    return blockClasses

}
