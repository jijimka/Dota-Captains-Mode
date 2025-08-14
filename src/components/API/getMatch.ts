import axios from "axios";

export async function getMatch(matchId:string) {
    const response = await axios.get(`https://api.opendota.com/api/matches/${matchId}`);
    console.log(response);
}

