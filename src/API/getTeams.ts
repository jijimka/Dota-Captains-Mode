import axios from "axios";

export async function getTeams(matchId:string) {
    const API_URL = 'https://api.opendota.com/api/matches/'
    let response
    try {
        response = await axios.get(API_URL + matchId);
        if (!response) {
            throw new Error('error');
        }
    } catch (error) {
        if (error instanceof Error) {
            return error;
        }
    }
    console.log(response);
    const teams:string[] = [response?.data?.radiant_name, response?.data?.dire_name]
    return teams;
}