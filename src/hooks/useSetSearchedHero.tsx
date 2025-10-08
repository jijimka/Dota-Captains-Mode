import {IHeroes} from "../types/IHeroes.ts";
import dotaHeroes from "../../dotaHeroes.json";
import {useMemo} from "react";

export const useSetSearchedHeroes = (inputValue: string) => {
    const searchedHeroes = useMemo(() => {
        const idArray: number[] = []
        let heroes: IHeroes[] = []

        heroes = dotaHeroes.filter((item) => {
            return item.name_loc.toLowerCase().includes(inputValue.toLowerCase())
        })

        heroes.map((item) => {
            idArray.push(item.id)
        })

        return {idArray,heroes}

    }, [inputValue]);
    return searchedHeroes;
}