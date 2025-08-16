export function getSynergyValue(oldValue:number,newValue:number):number {
    return +((Math.round(newValue) / 10) + oldValue).toFixed(2);
}