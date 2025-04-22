import './App.css'
import {useEffect, useState,} from "react";
import dotaHeroes from "../dotaHeroes.json"
import {useTypedDispatch,} from "./hooks/redux.ts";
import {sortAgiHeroes, sortIntHeroes, sortStrHeroes, sortUniHeroes} from "./utils/sortHeroesByAttribute.ts";
import {heroesSlice} from "./store/slices/heroesSlice.ts";
import AllHeroesList from "./components/AllHeroesList.tsx";
import PickList from "./components/PickList.tsx";
import {IHeroes} from "./types/IHeroes.ts";
import SearchModal from "./components/UI/SearchModal/SearchModal.tsx";
import {pickedHeroSlice} from "./store/slices/pickedHeroSlice.ts";


function App() {
    const {addIntHeroes, addStrHeroes, addUniHeroes, addAgiHeroes} = heroesSlice.actions
    const dispatch = useTypedDispatch();
    const [search, setSearch] = useState<string>('')
    const {setSearchedHero,clearSearchedHero,} = heroesSlice.actions;
    const {addConfirmHero} = pickedHeroSlice.actions
    const [sortedHeroes,setSortedHeroes] = useState<IHeroes[]>([])
    function sortHeroes() {
        dispatch(addAgiHeroes(sortAgiHeroes(dotaHeroes)))
        dispatch(addStrHeroes(sortStrHeroes(dotaHeroes)))
        dispatch(addUniHeroes(sortUniHeroes(dotaHeroes)))
        dispatch(addIntHeroes(sortIntHeroes(dotaHeroes)))
    }

    function searchHeroes(event: React.KeyboardEvent<HTMLDivElement>) {
        if (event.ctrlKey && event.key.toLowerCase() === 'a' || event.key.toLowerCase() === 'ф') {
            setSearch('')
            return
        }
        if (event.key === 'Enter') {
            if (sortedHeroes.length > 0) {
                dispatch(addConfirmHero(sortedHeroes[0]))
            }
        }
        if (event.key === "Backspace") {
            setSearch(search.slice(0, search.length - 1))
        }
        if (event.key.length > 1) return
        setSearch(search + event.key)

    }





    useEffect(() => {
        if (search.length <1) {
            dispatch(clearSearchedHero())
            return
        }
        let heroes:IHeroes[] = []
        heroes = dotaHeroes.filter((item) => {
            return item.name_loc.toLowerCase().includes(search.toLowerCase())
        })
        setSortedHeroes(heroes)
        const array:number[] = []

        heroes.map((item) => {
            array.push(item.id)
        })
        dispatch(setSearchedHero(array))
    }, [search]);

    useEffect(() => {
        sortHeroes()
    }, []);

    return (
        <>
            <div
                tabIndex={0}
                className='dota-picker'
                onKeyDown={(event) => searchHeroes(event)}
            >
                <SearchModal search={search}/>
                <AllHeroesList/>
                <PickList/>
            </div>
        </>
    )
}

export default App
