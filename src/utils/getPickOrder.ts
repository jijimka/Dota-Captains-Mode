export function getPickOrder(selectedPick:number | null, pickQueue:number[], pickOrder:number): number {
    if (selectedPick !== null) {
        return selectedPick
    }
    if (pickQueue.length !== 0) {
        return pickQueue[0]
    } else {
        return pickOrder
    }
}