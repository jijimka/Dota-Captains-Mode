import {FC, useMemo} from 'react';
import {useTypedSelector} from "../../hooks/redux.ts";
import {getHeroFromSynergyList} from "../../utils/getHeroFromSynergyList/getHeroFromSynergyList.ts";
import {PickOrder} from "../../models/PickOrder.ts";
interface HeroBlockFooterProps {
    heroId: number;
}


const HeroBlockFooter:FC<HeroBlockFooterProps> = ({heroId}) => {
    const {radiantAdvantageVs,radiantAdvantageWith,direAdvantageWith,direAdvantageVs} = useTypedSelector(state => state.synergyData)
    const {pickQueue,selectedPick} = useTypedSelector(state => state.pickOrder)

    const synergyText = useMemo(() => {
        let advantageVs
        let advantageWith
        let overall
        if (PickOrder.radiantPicks.includes(selectedPick??pickQueue[0])) {
            advantageVs = getHeroFromSynergyList(radiantAdvantageVs,heroId)?.synergy??0
            advantageWith = getHeroFromSynergyList(radiantAdvantageWith,heroId)?.synergy??0
            overall = (advantageVs + advantageWith).toFixed(1)
        } else {
            advantageVs = getHeroFromSynergyList(direAdvantageVs,heroId)?.synergy??0
            advantageWith = getHeroFromSynergyList(direAdvantageWith,heroId)?.synergy??0
            overall = (advantageVs + advantageWith).toFixed(1)
        }
        return `${advantageVs} / ${advantageWith} | ${overall}`
    },[pickQueue,selectedPick,radiantAdvantageWith,direAdvantageWith])

    return (
        <div className='hero-block__footer'>
            {synergyText}
        </div>
    );
};

export default HeroBlockFooter;