import {FC, useEffect, useState} from 'react';
import {useTypedDispatch, useTypedSelector} from "../../hooks/redux.ts";
import {pickedHeroSlice} from "../../store/slices/pickedHeroSlice.ts";
import {pickOrderSlice} from "../../store/slices/pickOrderSlice.ts";
import {PickOrder} from "../../models/PickOrder.ts";
import {useLazyQuery} from "@apollo/client";
import {GET_MATCHUPS} from "../../API/STRATZ_QUERY.ts";
import {heroSynergySlice} from "../../store/slices/heroSynergySlice.ts";
import {ISynergy} from "../../types/ISynergy.ts";
import {getSynergyValue} from "../../utils/getSynergyValue/getSynergyValue.ts";
import {getHeroFromSynergyList} from "../../utils/getHeroFromSynergyList/getHeroFromSynergyList.ts";
import {isBanTurn} from "../../utils/isBanTurn/isBanTurn.ts";

const PickConfirm: FC = () => {
    const [getMatchup, {data, loading}] = useLazyQuery(GET_MATCHUPS())
    const {confirmHero, pickedHeroes} = useTypedSelector(state => state.pickedHeroes)
    const {pickQueue, selectedPick} = useTypedSelector(state => state.pickOrder)
    const {addPickedHero} = pickedHeroSlice.actions
    const [radiantPicked, setRadiantPicked] = useState<boolean>(false)
    const [pickCount, setPickCount] = useState<number>(0)
    const isThisBanTurn: boolean = isBanTurn(selectedPick, pickQueue)
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
    const {removePickQueue, clearSelectedPick, removeSelectedPickQueue} = pickOrderSlice.actions
    const dispatch = useTypedDispatch()

    function setSynergy() {
        let count = 0
        const vsArray: ISynergy[] = []
        const withArray: ISynergy[] = []

        while (count < data.heroStats.matchUp[0].vs.length || count < data.heroStats.matchUp[0].with.length) {
            const vsArrayElement: ISynergy | undefined = data.heroStats.matchUp[0].vs[count]
            const withArrayElement: ISynergy | undefined = data.heroStats.matchUp[0].with[count]
            if (vsArrayElement) {
                const newSynergy = radiantPicked ?
                    getSynergyValue(getHeroFromSynergyList(direAdvantageVs, vsArrayElement.heroId2)?.synergy ?? 0, vsArrayElement.synergy * -1)
                    :
                    getSynergyValue(getHeroFromSynergyList(radiantAdvantageVs, vsArrayElement.heroId2)?.synergy ?? 0, vsArrayElement.synergy * -1)
                const obj: ISynergy = {
                    heroId2: vsArrayElement.heroId2,
                    synergy: newSynergy,
                }
                vsArray.push(obj)
            }
            if (withArrayElement) {
                const newSynergy = radiantPicked ?
                    getSynergyValue(getHeroFromSynergyList(radiantAdvantageWith, withArrayElement.heroId2)?.synergy ?? 0, withArrayElement.synergy)
                    :
                    getSynergyValue(getHeroFromSynergyList(direAdvantageWith, withArrayElement.heroId2)?.synergy ?? 0, withArrayElement.synergy)
                const obj: ISynergy = {
                    heroId2: withArrayElement.heroId2,
                    synergy: newSynergy,
                }
                withArray.push(obj)
            }
            count += 1
        }

        if (radiantPicked) {
            dispatch(setDireAdvantageVsData(vsArray))
            dispatch(setRadiantAdvantageWithData(withArray))
        } else {
            dispatch(setRadiantAdvantageVsData(vsArray))
            dispatch(setDireAdvantageWithData(withArray))
        }
    }

    function pickHero() {
        if (!confirmHero) return
        if (pickedHeroes.length === 24) return

        const pickedHero = {
            hero: confirmHero,
            pick: selectedPick ? selectedPick : pickQueue[0],
        }
        if (PickOrder.radiantPicks.includes(pickedHero.pick)) {
            setRadiantPicked(true)
        } else {
            setRadiantPicked(false)
        }
        if (!isThisBanTurn) {
            const heroId = pickedHero.hero.id
            getMatchup({variables: {heroId}})
            setPickCount(pickCount + 1)
        }
        dispatch(addPickedHero(pickedHero))

        if (selectedPick !== null) {
            dispatch(removeSelectedPickQueue(selectedPick))
            dispatch(clearSelectedPick())
        } else {
            dispatch(removePickQueue())
        }
    }

    useEffect(() => {
        if (!loading && data) {
            setSynergy()
        }
    }, [data, loading, pickCount]);

    if (!confirmHero) return (
        <div className='pick-confirm-empty'>
            <div className='pick-confirm__hero'>
                <h2 className='pick-confirm__text'>{isThisBanTurn ? 'Ban' : 'Pick'}</h2>
                <h2 className='pick-confirm__hero-name'></h2>
            </div>
        </div>
    )

    return (
        <div onClick={pickHero} className='pick-confirm'>
            <div className={['pick-confirm__ban-layer', isThisBanTurn ? 'ban-layer__active' : ''].join(' ')}></div>
            <div className='pick-confirm__hero-image'>
                <img draggable='false' alt={confirmHero.name_english_loc} src={confirmHero.image}/>
                <div className='image-fadeaway'></div>
            </div>
            <div className='pick-confirm__hero'>
                <h2 className='pick-confirm__text'>{isThisBanTurn ? 'Ban' : 'Pick'}</h2>
                <h2 className='pick-confirm__hero-name'>{confirmHero.name_english_loc}</h2>
            </div>
        </div>
    );
};

export default PickConfirm;