export function incrementSynergyValue(oldValue:number, newValue:number):number {
    const num1 = +(oldValue).toFixed(1)
    const num2 = +(newValue).toFixed(1)
    return +(num1 + num2).toFixed(1);
}