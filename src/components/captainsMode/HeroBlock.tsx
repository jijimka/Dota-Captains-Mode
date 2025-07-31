import {FC} from 'react';
import {IHeroes} from "../../types/IHeroes.ts";
import {useTypedDispatch, useTypedSelector} from "../../hooks/redux.ts";
import {pickedHeroSlice} from "../../store/slices/pickedHeroSlice.ts";
import HeroImage from "../UI/HeroImage/HeroImage.tsx";
import {getHeroBlockClass,} from "../../utils/getHeroBlockClass/getHeroBlockClass.ts";
import {isHeroPicked} from "../../utils/isHeroPicked/isHeroPicked.ts";

interface HeroBlockProps {
    hero: IHeroes,
}

const HeroBlock: FC<HeroBlockProps> = ({hero}) => {
    const {pickedHeroes} = useTypedSelector(state => state.pickedHeroes)
    const {searchedHero} = useTypedSelector(state => state.heroes)
    const {addConfirmHero} = pickedHeroSlice.actions
    const dispatch = useTypedDispatch()

    function heroClick(hero: IHeroes) {
        if (isHeroPicked(pickedHeroes, hero)) return
        if (pickedHeroes.length > 23) return
        dispatch(addConfirmHero(hero))
    }

    return (
        <div onClick={() => heroClick(hero)}
             className={getHeroBlockClass(pickedHeroes, hero, searchedHero).join(' ')}>
            <HeroImage hero={hero}/>
        </div>
    );
};

export default HeroBlock;