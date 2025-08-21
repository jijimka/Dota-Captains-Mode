import {FC, useMemo} from 'react';
import {useTypedSelector} from "../../hooks/redux.ts";
import {getHeroFromSynergyList} from "../../utils/getHeroFromSynergyList/getHeroFromSynergyList.ts";
import {PickOrder} from "../../models/PickOrder.ts";
import {isBanTurn} from "../../utils/isBanTurn/isBanTurn.ts";

interface HeroBlockFooterProps {
    heroId: number;
}


const HeroBlockFooter: FC<HeroBlockFooterProps> = ({heroId}) => {
    const {
        radiantAdvantageVs,
        radiantAdvantageWith,
        direAdvantageWith,
        direAdvantageVs
    } = useTypedSelector(state => state.synergyData)
    const {pickQueue, selectedPick} = useTypedSelector(state => state.pickOrder)

    let advantageVs: number
    let advantageWith: number
    let overall: number


    function direSynergyValue() {
        advantageVs = getHeroFromSynergyList(direAdvantageVs, heroId)?.synergy ?? 0
        advantageWith = getHeroFromSynergyList(direAdvantageWith, heroId)?.synergy ?? 0
        overall = +(advantageVs + advantageWith).toFixed(1)
    }

    function radiantSynergyValue() {
        advantageVs = getHeroFromSynergyList(radiantAdvantageVs, heroId)?.synergy ?? 0
        advantageWith = getHeroFromSynergyList(radiantAdvantageWith, heroId)?.synergy ?? 0
        overall = +(advantageVs + advantageWith).toFixed(1)
    }

    const [synergyText, synergyColor] = useMemo(() => {
        const isThisBanTurn = isBanTurn(selectedPick, pickQueue)
        const isRadiantTurn = PickOrder.radiant.includes(selectedPick ?? pickQueue[0])

        let synergyColor: string

        if (isRadiantTurn) {
            if (isThisBanTurn) {
                direSynergyValue()
            } else {
                radiantSynergyValue()
            }
        } else {
            if (isThisBanTurn) {
                radiantSynergyValue()
            } else {
                direSynergyValue()
            }
        }

        if (overall < 0) {
            synergyColor = `rgba(${(-overall) * 13}, 0, 0, 0.55)`
        } else {
            synergyColor = `rgba(0, ${(overall ?? 0) * 13}, 0, 0.55)`
        }
        return [`${advantageVs} / ${advantageWith} | ${overall}`, synergyColor]
    }, [pickQueue, selectedPick, radiantAdvantageWith, direAdvantageWith])

    return (
        <div
            className='hero-block__footer'
            style={{backgroundColor: synergyColor}}
        >
            {synergyText}
        </div>
    );
};

export default HeroBlockFooter;