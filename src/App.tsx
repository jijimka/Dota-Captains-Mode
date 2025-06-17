import './App.css'
import {useEffect,} from "react";
import dotaHeroes from "../dotaHeroes.json"
import {useTypedDispatch,} from "./hooks/redux.ts";
import {sortAgiHeroes, sortIntHeroes, sortStrHeroes, sortUniHeroes} from "./utils/sortHeroesByAttribute.ts";
import {heroesSlice} from "./store/slices/heroesSlice.ts";
import AllHeroesList from "./components/AllHeroesList.tsx";
import PickList from "./components/PickList.tsx";
import SearchInput from "./components/UI/SearchInput/SearchInput.tsx";
import NavMenu from "./components/NavMenu.tsx";


function App() {
    const {addIntHeroes, addStrHeroes, addUniHeroes, addAgiHeroes} = heroesSlice.actions
    const dispatch = useTypedDispatch();

    function sortHeroes() {
        dispatch(addAgiHeroes(sortAgiHeroes(dotaHeroes)))
        dispatch(addStrHeroes(sortStrHeroes(dotaHeroes)))
        dispatch(addUniHeroes(sortUniHeroes(dotaHeroes)))
        dispatch(addIntHeroes(sortIntHeroes(dotaHeroes)))
    }


    useEffect(() => {
        sortHeroes()
    }, []);

    return (
        <>
            <SearchInput>
                <NavMenu />
                <AllHeroesList/>
                <PickList/>
            </SearchInput>
        </>
    )
}

export default App
