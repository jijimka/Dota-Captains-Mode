export class PickTurns {
    public static pickOrder:('radiant' | 'dire')[] = ['radiant','dire','radiant',"dire","dire","radiant","radiant","dire","dire","radiant"]
    public static turn = 0

    static getPickTurn():boolean {
        return PickTurns.pickOrder[PickTurns.turn] === 'radiant'
    }
    static increasePickTurn():void {
        PickTurns.turn++
    }
    static isBoxActive(boxNumber:number):boolean {
        return boxNumber === PickTurns.turn;
    }

}