import axios from "axios";
import {getPickList} from "../../utils/getPickList/getPickList.ts";
import {getPickListFromTurbo} from "../../utils/getPickListFromTurbo/getPickListFromTurbo.tsx";

export interface responsePicks {
    is_pick: boolean;
    hero_id: number;
    team: number;
    order: number;
}

export async function getPicks(matchId: string) {
    const API_URL = 'https://api.opendota.com/api/matches/'
    let response
    let pickList
    try {
        response = await axios.get(API_URL + matchId);
        pickList = response.data.picks_bans
        if (!pickList) {
            throw new Error('No picks found.');
        }
    } catch (error) {
        if (error instanceof Error){
            console.log(error)
            return error;
        }
    }
    return pickList?.length === 10 ? getPickListFromTurbo(pickList) : getPickList(pickList)
}