import {IHeroes, IPickedHero} from "../../types/IHeroes";
import {PickOrder} from "../../models/PickOrder";

export function isHeroBanned(pickedHeroes: IPickedHero[], hero: IHeroes): boolean {
    const foundHero = pickedHeroes.find((pickedHero) => pickedHero.hero.id === hero.id)

    return !foundHero ? false : !PickOrder.picks.includes(foundHero.pick)
}