import {FC} from 'react';
import {useTypedDispatch, useTypedSelector} from "../hooks/redux.ts";
import {pickedHeroSlice} from "../store/slices/pickedHeroSlice.ts";
import {pickOrderSlice} from "../store/slices/pickOrderSlice.ts";
import {getPickOrder} from "../utils/getPickOrder.ts";

const PickConfirm: FC = () => {
    const {confirmHero,pickedHeroes} = useTypedSelector(state => state.pickedHeroes)
    const {pickOrder, pickQueue,selectedPick,skipPicks} = useTypedSelector(state => state.pickOrder)
    const {addPickedHero} = pickedHeroSlice.actions
    const {removePickQueue, increasePickOrder, clearSelectedPick,addToSkipPicks} = pickOrderSlice.actions
    const dispatch = useTypedDispatch()


    function pickHero() {
        if (confirmHero === null) return
        if (pickedHeroes.length === 24) return
        const pickedHero = {
            hero: confirmHero,
            pick: getPickOrder(selectedPick,pickQueue,pickOrder),
        }
        dispatch(addPickedHero(pickedHero))

        // EDIT THIS SHIT
        if (selectedPick !== null) {
            dispatch(clearSelectedPick())
            dispatch(addToSkipPicks(pickedHero.pick))
            if (selectedPick === pickOrder) {
                dispatch(increasePickOrder())
            }
        }else if (pickQueue.length !== 0) {
            dispatch(removePickQueue())
        } else {
            dispatch(increasePickOrder())
        }

    }
    console.log(skipPicks,)
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