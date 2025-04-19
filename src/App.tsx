import './App.css'
import {useEffect, useState,} from "react";
import dotaHeroes from "../dotaHeroes.json"
import {useTypedDispatch, useTypedSelector,} from "./hooks/redux.ts";
import {sortAgiHeroes, sortIntHeroes, sortStrHeroes, sortUniHeroes} from "./utils/sortHeroesByAttribute.ts";
import {heroesSlice} from "./store/slices/heroesSlice.ts";
import AllHeroesList from "./components/AllHeroesList.tsx";
import PickList from "./components/PickList.tsx";
import {IHeroes} from "./types/IHeroes.ts";

// import PickOrderBlock from "./components/PickOrderBlock.tsx";


function App() {
    const {addIntHeroes, addStrHeroes, addUniHeroes, addAgiHeroes} = heroesSlice.actions
    const {searchedHero} = useTypedSelector(state => state.heroes)
    const dispatch = useTypedDispatch();
    const [search, setSearch] = useState<string>('')
    const {setSearchedHero,clearSearchedHero} = heroesSlice.actions;
    const [modalTransition,setModalTransition] = useState<boolean>(false)
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

        if (event.key === "Backspace") {
            setSearch(search.slice(0, search.length - 1))
        }
        if (event.key.length > 1) return
        setSearch(search + event.key)
    }
    function useModalAnimation() {
        const [modal,setModal] = useState<number>(0);

        useEffect(() => {
            setModalTransition(false)
            setModal(55)
        },[search])

        useEffect(() => {
            if (modal === 0) return
            setModalTransition(true)
            setModal(0)
        },[modal])
        return modal
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
                <div
                    className='searchModal'
                    style={{
                        opacity:`${useModalAnimation()}%`,
                        transition: modalTransition?'0.3s ease all':'',
                    }}
                >
                    <div className='searchModal-text'>{search}</div>
                </div>
                <AllHeroesList/>
                <PickList/>
            </div>
        </>
    )
}

export default App
