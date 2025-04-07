import './App.css'
import {useEffect, } from "react";
import dotaHeroes from "../dotaHeroes.json"
import {useTypedDispatch,} from "./hooks/redux.ts";
import {sortAgiHeroes, sortIntHeroes, sortStrHeroes, sortUniHeroes} from "./utils/sortHeroesByAttribute.ts";
import {heroesSlice} from "./store/slices/heroesSlice.ts";
import AllHeroesList from "./components/AllHeroesList.tsx";
import RadiantPickSide from "./components/RadiantPickSide.tsx";
import DirePickSide from "./components/DirePickSide.tsx";
// import PickOrderBlock from "./components/PickOrderBlock.tsx";



function App() {
    // const {intHeroes, agiHeroes, uniHeroes, strHeroes} = useTypedSelector(state => state.heroes);
    const {addIntHeroes, addStrHeroes, addUniHeroes, addAgiHeroes} = heroesSlice.actions
    const dispatch = useTypedDispatch();
    // const [heroes,setHeroes] = useState<IHeroes[]>([])
    //   const [loading,setLoading] = useState<boolean>(false)
    // async function loadHeroes() {
    //   const response = await getHeroes()
    //   console.log(response)
    // }
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
            <div className='dota-picker'>
                <AllHeroesList/>
                <div className='picks-list'>
                    <RadiantPickSide/>
                    <DirePickSide/>
                </div>
            </div>
        </>
    )
}

export default App
