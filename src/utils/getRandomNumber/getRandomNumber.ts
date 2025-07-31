export function getRandomNumber(maxNumber:number,minNumber?:number | undefined):number {
    const min = minNumber?minNumber:0
    return Math.round(Math.random() * (maxNumber - min) + min)
}
