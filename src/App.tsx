import './App.css'
import {useEffect, useState,} from "react";
import dotaHeroes from "../dotaHeroes.json"
import {useTypedDispatch,} from "./hooks/redux.ts";
import {sortAgiHeroes, sortIntHeroes, sortStrHeroes, sortUniHeroes} from "./utils/sortHeroesByAttribute.ts";
import {heroesSlice} from "./store/slices/heroesSlice.ts";
import AllHeroesList from "./components/AllHeroesList.tsx";
import RadiantPickSide from "./components/RadiantPickSide.tsx";
import DirePickSide from "./components/DirePickSide.tsx";
import PickSide from "./components/PickSide.tsx";
import {pickedHeroSlice} from "./store/slices/pickedHeroSlice.ts";
import {IHeroes, IPickedHero} from "./types/IHeroes.ts";
import PickConfirm from "./components/PickConfirm.tsx";
// import PickOrderBlock from "./components/PickOrderBlock.tsx";



function App() {
    // const {intHeroes, agiHeroes, uniHeroes, strHeroes} = useTypedSelector(state => state.heroes);
    const {addIntHeroes, addStrHeroes, addUniHeroes, addAgiHeroes} = heroesSlice.actions
    const {addPickedHero} = pickedHeroSlice.actions
    const dispatch = useTypedDispatch();
    const [confirmHero,setConfirmHero] = useState<IHeroes>()
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
                <div className='picks'>
                    <div className='picks-list'>
                        <PickSide side={'Radiant'}/>
                        <PickSide side={'Dire'}/>
                    </div>
                        <PickConfirm/>
                </div>
            </div>
        </>
    )
}

export default App
