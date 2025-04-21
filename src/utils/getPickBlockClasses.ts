




const picks = [8,9,13,14,15,16,17,18,23,24]
// const dire = [2,3,5,6,9,12,13,16,17,20,21,24]

export function getPickBlockClasses(orderNumber:number, pickOrder:number, selectedPick:number | null, pickQueue:number[]):string[] {
    const blockClasses: string[] = []
        if (!picks.includes(orderNumber)) {
            blockClasses.push('pick__block-ban')
        } else {
            blockClasses.push('pick__block')
        }
        if (selectedPick !== null && selectedPick === orderNumber) {
            blockClasses.push('pick-block__selected')
        }
        if (pickQueue[0] === orderNumber) {
            blockClasses.push('pick-block__active')
        } else if (pickOrder === orderNumber && pickQueue.length === 0) {
            blockClasses.push('pick-block__active')
        }
    return blockClasses

}
