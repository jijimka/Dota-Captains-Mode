import React, {FC, useEffect, useState} from 'react';
import {useTypedDispatch, useTypedSelector} from "../../hooks/redux.ts";
import {pickedHeroSlice} from "../../store/slices/pickedHeroSlice.ts";
import {IHeroes} from "../../types/IHeroes.ts";
import {heroesSlice} from "../../store/slices/heroesSlice.ts";
import SearchModal from "../UI/SearchModal/SearchModal.tsx";
import {isHeroPicked} from "../../utils/isHeroPicked/isHeroPicked.ts";
import {useWindowSize} from "../../hooks/useWindowSize.tsx";
import {useSetSearchedHeroes} from "../../hooks/useSetSearchedHero.tsx";

interface SearchInputProps {
    children: React.ReactNode,
}

const SearchInput: FC<SearchInputProps> = ({children}) => {

    const dispatch = useTypedDispatch();
    const [search, setSearch] = useState<string>('')
    const {pickedHeroes} = useTypedSelector(state => state.pickedHeroes);
    const {addConfirmHero,} = pickedHeroSlice.actions
    const [sortedHeroes, setSortedHeroes] = useState<IHeroes[]>([])
    const {idArray,heroes} = useSetSearchedHeroes(search)
    const {setSearchedHero, clearSearchedHero,} = heroesSlice.actions;
    const windowSize = useWindowSize()
    let isMobile
    if (windowSize.width && windowSize.height) {
        isMobile = windowSize.width <= 770
    }

    function searchHeroes(event: React.KeyboardEvent<HTMLDivElement>) {
        if (event.ctrlKey && event.key.toLowerCase() === 'backspace') {
            event.preventDefault()
            event.stopPropagation()
            return
        }

        switch (event.key) {
            case 'Escape':
                setSearch('')
                break;
            case 'Enter':
                if (sortedHeroes.length > 0 && !isHeroPicked(pickedHeroes, sortedHeroes[0]) && pickedHeroes.length < 24) {
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
        setSortedHeroes(heroes)
        dispatch(setSearchedHero(idArray))
    }, [search]);

    if (isMobile) return <>{children}</>

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