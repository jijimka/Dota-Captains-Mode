export function getSynergyValue(oldValue:number,newValue:number):number {
    return +((newValue) + oldValue).toFixed(1);
}