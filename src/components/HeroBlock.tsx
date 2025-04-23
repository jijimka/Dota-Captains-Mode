import {FC} from 'react';
import {IHeroes} from "../types/IHeroes.ts";
import {useTypedDispatch, useTypedSelector} from "../hooks/redux.ts";
import {pickedHeroSlice} from "../store/slices/pickedHeroSlice.ts";
interface HeroBlockProps {
    hero:IHeroes,
}
const HeroBlock:FC<HeroBlockProps> = ({hero}) => {
    const {pickedHeroes} = useTypedSelector(state => state.pickedHeroes)
    const {searchedHero} = useTypedSelector(state => state.heroes)
    const {addConfirmHero} = pickedHeroSlice.actions
    const blockClasses:string[] = []
    const dispatch = useTypedDispatch()

    function isHeroPicked():boolean {
        return pickedHeroes.find((pickedHero) => pickedHero.hero.id === hero.id) !== undefined
    }
    function isHeroBanned() {
        const picks = [8,9,13,14,15,16,17,18,23,24]
        const foundHero = pickedHeroes.find((pickedHero) => pickedHero.hero.id === hero.id)
        if (foundHero === undefined ) return false
        return !picks.includes(foundHero.pick)
    }
    function heroClick(hero:IHeroes) {
        if (isHeroPicked()) return
        dispatch(addConfirmHero(hero))
    }

    if (isHeroPicked()) {
        if (isHeroBanned()) {
            blockClasses.push('heroBanned')
        } else {
            blockClasses.push('heroDisabled')
        }
    }  else {
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
                 draggable={false}
            />
        </div>
    );
};

export default HeroBlock;