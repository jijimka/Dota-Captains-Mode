import {FC} from 'react';
import {useTypedDispatch, useTypedSelector} from "../hooks/redux.ts";
import {pickedHeroSlice} from "../store/slices/pickedHeroSlice.ts";
import {pickOrderSlice} from "../store/slices/pickOrderSlice.ts";

const PickConfirm: FC = () => {
    const {confirmHero,pickedHeroes} = useTypedSelector(state => state.pickedHeroes)
    const {pickQueue,selectedPick} = useTypedSelector(state => state.pickOrder)
    const {addPickedHero} = pickedHeroSlice.actions
    const {removePickQueue, clearSelectedPick,removeSelectedPickQueue} = pickOrderSlice.actions
    const dispatch = useTypedDispatch()


    function pickHero() {
        if (confirmHero === null) return
        if (pickedHeroes.length === 24) return
        const pickedHero = {
            hero: confirmHero,
            pick: selectedPick !== null?selectedPick:pickQueue[0],
        }
        dispatch(addPickedHero(pickedHero))

        // EDIT THIS SHIT
        if (selectedPick !== null) {
            dispatch(removeSelectedPickQueue(selectedPick))
            dispatch(clearSelectedPick())
        } else {
            dispatch(removePickQueue())
        }

    }
    if (confirmHero === null) return <div className='pick-confirm'></div>

    return (

        <div onClick={pickHero} className='pick-confirm'>
            <div className='pick-confirm__hero'>
                <div className='pick-confirm__hero-image'>
                    <img className='image-container__image' src={confirmHero.image} alt={confirmHero.name}/>
                </div>
                <h2 className='pick-confirm__hero-name'>{confirmHero.name_english_loc}</h2>
            </div>
            <h2 className='pick-confirm__text'>Выбрать этого героя</h2>
        </div>
    );
};

export default PickConfirm;