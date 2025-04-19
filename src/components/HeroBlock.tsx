import {FC} from 'react';
import {IHeroes} from "../types/IHeroes.ts";
import {useTypedDispatch, useTypedSelector} from "../hooks/redux.ts";
import {pickedHeroSlice} from "../store/slices/pickedHeroSlice.ts";
interface HeroBlockProps {
    hero:IHeroes,
}
const HeroBlock:FC<HeroBlockProps> = ({hero}) => {
    const {disabledHeroes} = useTypedSelector(state => state.pickedHeroes)
    const {searchedHero} = useTypedSelector(state => state.heroes)
    const {addConfirmHero} = pickedHeroSlice.actions
    const dispatch = useTypedDispatch()

    function heroClick(hero:IHeroes) {
        if (disabledHeroes.includes(hero.id)) return
        dispatch(addConfirmHero(hero))
    }
    const blockClasses:string[] = []
    if (disabledHeroes.includes(hero.id)) {
        blockClasses.push('heroDisabled')
    } else {
        blockClasses.push('attribute__image-container')
    }
    if (searchedHero) {
        if (!searchedHero.includes(hero.id)) {
            blockClasses.push('not-searched')
        }
    }
    return (
        <div onClick={() => heroClick(hero)} className={blockClasses.join(' ')}>
            <img src={hero.image}
                 className='image-container__image'
                 alt={hero.name}
            />
        </div>
    );
};

export default HeroBlock;