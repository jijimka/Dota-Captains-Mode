import axios from "axios";

export interface responsePicks {
    is_pick: boolean;
    hero_id: number;
    team: number;
    order: number;
}

export async function getImportedMatch(matchId: string) {
    const API_URL = 'https://api.opendota.com/api/matches/'
    let response
    try {
        response = await axios.get(API_URL + matchId);
        return response.data;
    } catch (error) {
        if (error instanceof Error){
            console.log(error)
            return error;
        }
    }
}