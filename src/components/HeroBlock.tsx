import {FC} from 'react';
import {IHeroes} from "../types/IHeroes.ts";
import {useTypedDispatch, useTypedSelector} from "../hooks/redux.ts";
import {pickedHeroSlice} from "../store/slices/pickedHeroSlice.ts";
interface HeroBlockProps {
    hero:IHeroes,
}
const HeroBlock:FC<HeroBlockProps> = ({hero}) => {
    const {disabledHeroes} = useTypedSelector(state => state.pickedHeroes)
    const {addConfirmHero} = pickedHeroSlice.actions
    const dispatch = useTypedDispatch()

    function heroClick(hero:IHeroes) {
        if (disabledHeroes.includes(hero.id)) return
        dispatch(addConfirmHero(hero))
    }

    return (
        <div onClick={() => heroClick(hero)} className={disabledHeroes.includes(hero.id)?'heroDisabled': 'attribute__image-container'}>
            <img src={hero.image}
                 className='image-container__image'
                 alt={hero.name}
            />
        </div>
    );
};

export default HeroBlock;