import {useEffect, useMemo, useState} from "react";
import {useTypedDispatch, useTypedSelector} from "./redux.ts";
import {IPickedHero} from "../types/IHeroes.ts";
import {pickedHeroSlice} from "../store/slices/pickedHeroSlice.ts";
import {pickOrderSlice} from "../store/slices/pickOrderSlice.ts";
import HeroImage from "../components/UI/HeroImage/HeroImage.tsx";
import {heroSynergySlice} from "../store/slices/heroSynergySlice.ts";
import {useLazyQuery} from "@apollo/client";
import {GET_MATCHUPS} from "../API/STRATZ_QUERY.ts";
import {PickOrder} from "../models/PickOrder.ts";
import {ISynergy} from "../types/ISynergy.ts";
import {getNewSynergyArray} from "../utils/getNewSynergyArray/getNewSynergyArray.ts";

//<img onClick={() => deleteHero(pickedHeroes[i])}
//                              draggable={false}
//                              className='pick__block-image'
//                              src={pickedHeroes[i].hero.image}
//                              alt={pickedHeroes[i].hero.name_english_loc}
//                         />
export const useDisplayPickedHero = (orderNumber: number,) => {
    const [getMatchup, {data, loading}] = useLazyQuery(GET_MATCHUPS())
    const newSynergyVsData = data?.heroStats?.matchUp[0]?.vs??null
    const newSynergyWithData = data?.heroStats?.matchUp[0]?.with??null
    const dispatch = useTypedDispatch();
    const {
        radiantAdvantageVs,
        radiantAdvantageWith,
        direAdvantageWith,
        direAdvantageVs
    } = useTypedSelector(state => state.synergyData)
    const {
        setRadiantAdvantageVsData,
        setRadiantAdvantageWithData,
        setDireAdvantageWithData,
        setDireAdvantageVsData
    } = heroSynergySlice.actions
    const isThisPickTurn = PickOrder.picks.includes(orderNumber)
    const [deleteHeroCount,setDeleteHeroCount] = useState<number>(0)
    const [isHeroRadiant, setIsHeroRadiant] = useState<boolean>(false)
    const {removePickedHero} = pickedHeroSlice.actions
    const {addPickQueue} = pickOrderSlice.actions
    const {selectedPick,pickQueue} = useTypedSelector(state => state.pickOrder)
    const {pickedHeroes,confirmHero} = useTypedSelector(state => state.pickedHeroes)
    const {isSynergyActive} = useTypedSelector(state => state.synergyData)
    const nextPickNumber = selectedPick??pickQueue[0]

    function setSynergy() {
        let vsArray:ISynergy[]
        let withArray:ISynergy[]

        if (isHeroRadiant) {
            [vsArray,withArray] = getNewSynergyArray(newSynergyVsData,newSynergyWithData,direAdvantageVs,radiantAdvantageWith,true)
        } else {
            [vsArray,withArray] = getNewSynergyArray(newSynergyVsData,newSynergyWithData,radiantAdvantageVs,direAdvantageWith,true)
        }

        if (isHeroRadiant) {
            dispatch(setDireAdvantageVsData(vsArray))
            dispatch(setRadiantAdvantageWithData(withArray))
        } else {
            dispatch(setRadiantAdvantageVsData(vsArray))
            dispatch(setDireAdvantageWithData(withArray))
        }
    }

    function deleteHero(hero:IPickedHero) {
        dispatch(removePickedHero(hero.hero))
        dispatch(addPickQueue(hero.pick))
        if (PickOrder.radiantPicks.includes(hero.pick)) {
            setIsHeroRadiant(true)
        } else {
            setIsHeroRadiant(false)
        }
        if (isThisPickTurn) {
            const heroId = hero.hero.id
            getMatchup({variables: {heroId}})
            setDeleteHeroCount(deleteHeroCount + 1)
        }
    }
    useEffect(() => {
        if (!loading && data) {
            setSynergy()
        }
    }, [data, loading, deleteHeroCount]);

    const displayPickedHero = useMemo(() => {
        for (let i = 0; i < pickedHeroes.length; i++) {
            if (pickedHeroes[i].pick === orderNumber) {
                return (
                    <>
                        <HeroImage hero={pickedHeroes[i].hero}
                                   onClick={() => deleteHero(pickedHeroes[i])}
                        />
                    </>
                )
            }
        }
        if (!isSynergyActive && confirmHero && nextPickNumber === orderNumber) {
            return (
                <>
                    <HeroImage hero={confirmHero}
                               grayScale={true}
                    />
                </>
            )
        }
        return <></>

    }, [pickedHeroes,confirmHero,selectedPick,pickQueue])
    return displayPickedHero
}