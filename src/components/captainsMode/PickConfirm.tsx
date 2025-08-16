import {FC} from 'react';
import {useTypedDispatch, useTypedSelector} from "../../hooks/redux.ts";
import {pickedHeroSlice} from "../../store/slices/pickedHeroSlice.ts";
import {pickOrderSlice} from "../../store/slices/pickOrderSlice.ts";
import {PickOrder} from "../../models/PickOrder.ts";

const PickConfirm: FC = () => {
    const {confirmHero, pickedHeroes} = useTypedSelector(state => state.pickedHeroes)
    const {pickQueue, selectedPick} = useTypedSelector(state => state.pickOrder)
    const {addPickedHero} = pickedHeroSlice.actions
    const {removePickQueue, clearSelectedPick, removeSelectedPickQueue} = pickOrderSlice.actions
    const dispatch = useTypedDispatch()

    function isBanTurn() {
        return !PickOrder.picks.includes(selectedPick ? selectedPick : pickQueue[0])
    }

    function pickHero() {
        if (!confirmHero) return
        if (pickedHeroes.length === 24) return

        const pickedHero = {
            hero: confirmHero,
            pick: selectedPick ? selectedPick : pickQueue[0],
        }

        dispatch(addPickedHero(pickedHero))

        if (selectedPick !== null) {
            dispatch(removeSelectedPickQueue(selectedPick))
            dispatch(clearSelectedPick())
        } else {
            dispatch(removePickQueue())
        }
    }

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