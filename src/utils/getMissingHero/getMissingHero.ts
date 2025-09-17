import {ISynergy} from "../../types/ISynergy";

export function getMissingHero(newSynergyArray: ISynergy[], oldSynergyArray: ISynergy[]): ISynergy | undefined {
    const values = newSynergyArray?.map((item) => Object.values(item))
    const missingHero = oldSynergyArray?.filter((item) => !values.flat(Infinity).includes(item.heroId2))
    return missingHero[0]
}