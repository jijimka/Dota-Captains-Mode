import './App.css'
import {BrowserRouter, Route, Routes} from "react-router";
import CaptainsMode from "./routes/CaptainsMode.tsx";
import {heroesSlice} from "./store/slices/heroesSlice.ts";
import {useTypedDispatch} from "./hooks/redux.ts";
import {sortHeroesByAttribute,} from "./utils/sortHeroesByAttribute.ts";
import dotaHeroes from "../dotaHeroes.json";
import {useEffect} from "react";
import ImmortalDraft from "./routes/ImmortalDraft.tsx";
import {PageRoutes} from "./models/PageRoutes.ts";
import {useQuery} from "@apollo/client";
import {GET_MATCHUPS} from "./API/STRATZ_QUERY.ts";


function App() {
    const {addIntHeroes, addStrHeroes, addUniHeroes, addAgiHeroes} = heroesSlice.actions
    const dispatch = useTypedDispatch();
    const {data} = useQuery(GET_MATCHUPS(5))
    function sortHeroes() {
        const [strHeroes, agiHeroes, intHeroes, uniHeroes] = sortHeroesByAttribute(dotaHeroes)
        dispatch(addStrHeroes(strHeroes))
        dispatch(addAgiHeroes(agiHeroes))
        dispatch(addIntHeroes(intHeroes))
        dispatch(addUniHeroes(uniHeroes))
    }

    console.log(data)
    useEffect(() => {
        sortHeroes()
    }, []);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={PageRoutes.CAPTAINSMODEURL} element={<CaptainsMode/>}/>
                    <Route path={PageRoutes.IMMORTALDRAFTURL} element={<ImmortalDraft/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
