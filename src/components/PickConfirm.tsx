import {FC} from 'react';
import {useTypedDispatch, useTypedSelector} from "../hooks/redux.ts";
import {pickedHeroSlice} from "../store/slices/pickedHeroSlice.ts";

const PickConfirm:FC = () => {
    const {pickNumber,confirmHero} = useTypedSelector(state => state.pickedHeroes)
    const {addPickedHero} = pickedHeroSlice.actions
    const dispatch = useTypedDispatch()

    function pickHero() {
        if (confirmHero === null) return
        const pickedHero = {
            hero:confirmHero,
            pick:pickNumber,
        }
        dispatch(addPickedHero(pickedHero))
    }
    if (confirmHero === null) return <div className='pick-confirm'></div>

    return (

        <div onClick={pickHero} className='pick-confirm'>
            <div className='pick-confirm__hero'>
                <div className='pick-confirm__hero-image'>
                    <img className='image-container__image' src={confirmHero.image} alt={confirmHero.name} />
                </div>
                <h2 className='pick-confirm__hero-name'>{confirmHero.name_english_loc}</h2>
            </div>
            <h2 className='pick-confirm__text'>Выбрать этого героя</h2>
        </div>
    );
};

export default PickConfirm;