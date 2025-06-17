import './App.css'
import {BrowserRouter, Route, Routes} from "react-router";
import CaptainsMode from "./routes/CaptainsMode.tsx";
import {heroesSlice} from "./store/slices/heroesSlice.ts";
import {useTypedDispatch} from "./hooks/redux.ts";
import {sortAgiHeroes, sortIntHeroes, sortStrHeroes, sortUniHeroes} from "./utils/sortHeroesByAttribute.ts";
import dotaHeroes from "../dotaHeroes.json";
import {useEffect} from "react";
import ImmortalDraft from "./routes/ImmortalDraft.tsx";


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
            <BrowserRouter>
                <Routes>
                    <Route path='/Dota-Captains-Mode/' element={<CaptainsMode/>}/>
                    <Route path='/ImmortalDraft' element={<ImmortalDraft/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
