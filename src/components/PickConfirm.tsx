import {FC} from 'react';
import {useTypedDispatch, useTypedSelector} from "../hooks/redux.ts";
import {pickedHeroSlice} from "../store/slices/pickedHeroSlice.ts";
import {pickOrderSlice} from "../store/slices/pickOrderSlice.ts";

const PickConfirm: FC = () => {
    const {confirmHero,pickedHeroes} = useTypedSelector(state => state.pickedHeroes)
    const {pickOrder, pickQueue} = useTypedSelector(state => state.pickOrder)
    const {addPickedHero} = pickedHeroSlice.actions
    const {removePickQueue, increasePickOrder} = pickOrderSlice.actions
    const dispatch = useTypedDispatch()

    function getPickOrder(): number {
        if (pickQueue.length !== 0) {
            return pickQueue[0]
        } else {
            return pickOrder
        }


    }
    function pickHero() {
        if (confirmHero === null) return
        if (pickedHeroes.length === 24) return
        const pickedHero = {
            hero: confirmHero,
            pick: getPickOrder(),
        }
        console.log(pickedHero, pickOrder)
        dispatch(addPickedHero(pickedHero))
        if (pickQueue.length !== 0) {
            dispatch(removePickQueue())
        } else {
            dispatch(increasePickOrder())
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