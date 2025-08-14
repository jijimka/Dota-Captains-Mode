import {responsePicks} from "../../components/API/getPicks.ts";
import {getHeroFromId} from "../getHeroFromId/getHeroFromId.ts";
import heroList from "../../../dotaHeroes.json";
import {IPickedHero} from "../../types/IHeroes.ts";



export function getPickList(pickList: responsePicks[]) {
    const picks: IPickedHero[] = []
    pickList.forEach((item: responsePicks) => {
        const foundHero = getHeroFromId(heroList, item.hero_id)
        if (!foundHero) {
            return;
        }
        const newPick: IPickedHero = {
            hero: foundHero,
            pick: item.order + 1,
        }
        picks.push(newPick)
    })
    return picks;
}