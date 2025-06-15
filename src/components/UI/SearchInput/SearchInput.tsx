import React, {FC, useEffect, useState} from 'react';
import {useTypedDispatch, useTypedSelector} from "../../../hooks/redux.ts";
import {pickedHeroSlice} from "../../../store/slices/pickedHeroSlice.ts";
import {IHeroes} from "../../../types/IHeroes.ts";
import dotaHeroes from "../../../../dotaHeroes.json";
import {heroesSlice} from "../../../store/slices/heroesSlice.ts";
import SearchModal from "../SearchModal/SearchModal.tsx";
import {isHeroPicked} from "../../../utils/isHeroPicked.ts";

interface SearchInputProps {
    children: React.ReactNode,
}

const SearchInput: FC<SearchInputProps> = ({children}) => {

    const dispatch = useTypedDispatch();
    const [search, setSearch] = useState<string>('')
    const {pickedHeroes} = useTypedSelector(state => state.pickedHeroes);
    const {addConfirmHero,} = pickedHeroSlice.actions
    const [sortedHeroes, setSortedHeroes] = useState<IHeroes[]>([])
    const {setSearchedHero, clearSearchedHero,} = heroesSlice.actions;

    function searchHeroes(event: React.KeyboardEvent<HTMLDivElement>) {
        if (event.ctrlKey && event.key.toLowerCase() === 'a' || event.key.toLowerCase() === 'ф') {
            setSearch('')
            return
        }
        switch (event.key) {
            case 'Enter':
                if (sortedHeroes.length > 0 && !isHeroPicked(pickedHeroes, sortedHeroes[0])) {
                    dispatch(addConfirmHero(sortedHeroes[0]))
                }
                break
            case 'Backspace':
                setSearch(search.slice(0, search.length - 1))
                break
            default:
                if (event.key.length > 1) break
                setSearch(search + event.key)
                break
        }

    }

    useEffect(() => {
        if (search.length < 1) {
            dispatch(clearSearchedHero())
            return
        }
        let heroes: IHeroes[] = []
        heroes = dotaHeroes.filter((item) => {
            return item.name_loc.toLowerCase().includes(search.toLowerCase())
        })
        setSortedHeroes(heroes)
        const array: number[] = []

        heroes.map((item) => {
            array.push(item.id)
        })
        dispatch(setSearchedHero(array))
    }, [search]);

    return (
        <div
            tabIndex={0}
            className='dota-picker'
            onKeyDown={(event) => searchHeroes(event)}
        >
            <SearchModal search={search}/>
            {children}
        </div>
    );
};

export default SearchInput;