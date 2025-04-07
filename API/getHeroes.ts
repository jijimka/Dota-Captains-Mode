import axios from 'axios';
import {IHeroes} from "../src/types/IHeroes.ts";

// const options = {
//     method: 'GET',
//     url: 'https://dota2-heroes.p.rapidapi.com/heroes/english',
//     headers: {
//         'x-rapidapi-key': '0c948fb6admsh4c789c116fe2804p11abf6jsn8dd6839c37d3',
//         'x-rapidapi-host': 'dota2-heroes.p.rapidapi.com'
//     }
// };
const options = {
    method: 'GET',
    url: 'https://dota2-heroes.p.rapidapi.com/heroes/english',
    headers: {
        'x-rapidapi-key': '5f2802bac9msh4ded60fe37858d9p19b39ajsnda3f06a185bd',
        'x-rapidapi-host': 'dota2-heroes.p.rapidapi.com'
    }
};

// export async function fetchHeroes() {
//     try {
//         const response = await axios.get('https://api.opendota.com/api/heroes');
//         console.log(response.data);
//     } catch (error) {
//         console.error(error);
//     }
// }

export async function getHeroes() {
    try {
        const response = await axios.request<IHeroes[]>(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}