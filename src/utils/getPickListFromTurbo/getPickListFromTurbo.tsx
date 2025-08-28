import {responsePicks} from "../../API/getPicks.ts";
import {IPickedHero} from "../../types/IHeroes.ts";
import {getHeroFromId} from "../getHeroFromId/getHeroFromId.ts";
import heroList from "../../../dotaHeroes.json";
import {PickOrder} from "../../models/PickOrder.ts";

export function getPickListFromTurbo(pickList:responsePicks[]) {
    const picks: IPickedHero[] = []
    pickList.forEach((item: responsePicks) => {
        const foundHero = getHeroFromId(heroList, item.hero_id)
        if (!foundHero) {
            return;
        }
        const newPick: IPickedHero = {
            hero: foundHero,
            pick: PickOrder.picks[item.order],
        }
        picks.push(newPick)
    })
    return picks;
}