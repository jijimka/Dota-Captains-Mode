import {ISynergy} from "../../types/ISynergy.ts";

export function getMissingHero(newArray: ISynergy[], oldArray: ISynergy[]): ISynergy {
    const values = newArray?.map((item) => Object.values(item))
    const missingHero = oldArray?.filter((item) => !values.flat(Infinity).includes(item.heroId2))
    return missingHero[0]
}