import {FC, useEffect} from 'react';
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

const PickConfirm: FC = () => {
    const {confirmHero, pickedHeroes} = useTypedSelector(state => state.pickedHeroes)
    const {pickQueue, selectedPick} = useTypedSelector(state => state.pickOrder)
    const {addPickedHero} = pickedHeroSlice.actions
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
    const [getMatchup, {data, loading}] = useLazyQuery(GET_MATCHUPS())

    function isBanTurn() {
        return !PickOrder.picks.includes(selectedPick ? selectedPick : pickQueue[0])
    }


    function setSynergy() {
        const isRadiantPick = !PickOrder.radiantPicks.includes(selectedPick ?? pickQueue[0])
        const vsArray = data.heroStats.matchUp[0].vs.map((item: ISynergy) => {
            const newSynergy = isRadiantPick ?
                getSynergyValue(getHeroFromSynergyList(direAdvantageVs, item.heroId2)?.synergy ?? 0, item.synergy*-1)
                :
                getSynergyValue(getHeroFromSynergyList(radiantAdvantageVs, item.heroId2)?.synergy ?? 0, item.synergy*-1)
            return {
                ...item,
                synergy: newSynergy
            }
        })
        const withArray = data.heroStats.matchUp[0].with.map((item: ISynergy) => {
            const newSynergy = !isRadiantPick ?
                getSynergyValue(getHeroFromSynergyList(radiantAdvantageWith, item.heroId2)?.synergy ?? 0, item.synergy)
                :
                getSynergyValue(getHeroFromSynergyList(direAdvantageWith, item.heroId2)?.synergy ?? 0, item.synergy)
            return {
                ...item,
                synergy: newSynergy
            }
        })
        if (isRadiantPick) {
            dispatch(setDireAdvantageVsData(vsArray))
            dispatch(setRadiantAdvantageWithData(withArray))
        } else {
            dispatch(setRadiantAdvantageVsData(vsArray))
            dispatch(setDireAdvantageWithData(withArray))
        }
    }
    console.log(radiantAdvantageVs,'radiant vs',radiantAdvantageWith,'radiant with',direAdvantageVs,'dire vs',direAdvantageWith,'dire with')
    function pickHero() {
        if (!confirmHero) return
        if (pickedHeroes.length === 24) return

        const pickedHero = {
            hero: confirmHero,
            pick: selectedPick ? selectedPick : pickQueue[0],
        }
        if (!isBanTurn()) {
            const heroId = pickedHero.hero.id
            getMatchup({variables: {heroId}})
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
    }, [data]);

    if (!confirmHero) return (
        <div className='pick-confirm-empty'>
            <div className='pick-confirm__hero'>
                <h2 className='pick-confirm__text'>{isBanTurn() ? 'Ban' : 'Pick'}</h2>
                <h2 className='pick-confirm__hero-name'></h2>
            </div>
        </div>
    )

    return (
        <div onClick={pickHero} className='pick-confirm'>
            <div className={['pick-confirm__ban-layer', isBanTurn() ? 'ban-layer__active' : ''].join(' ')}></div>
            <div className='pick-confirm__hero-image'>
                <img draggable='false' alt={confirmHero.name_english_loc} src={confirmHero.image}/>
                <div className='image-fadeaway'></div>
            </div>
            <div className='pick-confirm__hero'>
                <h2 className='pick-confirm__text'>{isBanTurn() ? 'Ban' : 'Pick'}</h2>
                <h2 className='pick-confirm__hero-name'>{confirmHero.name_english_loc}</h2>
            </div>
        </div>
    );
};

export default PickConfirm;