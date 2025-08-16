import {FC} from 'react';
import {useTypedSelector} from "../../hooks/redux.ts";
import {getHeroFromId} from "../../utils/getHeroFromId/getHeroFromId.ts";
import {ISynergy} from "../../types/ISynergy.ts";
interface HeroBlockFooterProps {
    heroId: number;
}
function getHero(list:ISynergy[],heroId:number):ISynergy | null {
    const filteredList = list.filter((synergy) => {
        return synergy.heroId === heroId
    })
    return filteredList[0]??null;
}

const HeroBlockFooter:FC<HeroBlockFooterProps> = ({heroId}) => {
    const {advantageVs,advantageWith} = useTypedSelector(state => state.synergyData)
    const thisAdvantageVs:number = getHero(advantageVs,heroId)?.synergy??0
    const thisAdvantageWith:number = getHero(advantageWith,heroId)?.synergy??0
    const overall:number = thisAdvantageVs + thisAdvantageWith

    console.log(thisAdvantageVs,thisAdvantageWith,heroId)

    return (
        <div className='hero-block__footer'>
            {`${thisAdvantageVs} / ${thisAdvantageWith} | ${overall}`  }
        </div>
    );
};

export default HeroBlockFooter;