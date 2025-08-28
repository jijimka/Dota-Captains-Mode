import {FC, useMemo} from 'react';
import {useTypedSelector} from "../../hooks/redux.ts";
import {useSynergyValue} from "../../hooks/useSynergyValue.tsx";

interface HeroBlockFooterProps {
    heroId: number;
}


const HeroBlockFooter: FC<HeroBlockFooterProps> = ({heroId}) => {
    const {isSynergyActive} = useTypedSelector(state => state.synergyData)
    const [advantageVs,advantageWith,overall] = useSynergyValue(heroId)
    const synergyColor = useMemo(() => {
        let color:string
        if (overall < 0) {
            color = `rgba(${(-overall) * 13}, 0, 0, 0.55)`
        } else {
            color = `rgba(0, ${(overall ?? 0) * 13}, 0, 0.55)`
        }
        return color
    },[overall])
    if (!isSynergyActive) return (
        <></>
    )
    return (
        <div
            className='hero-block__footer'
            style={{backgroundColor: synergyColor}}
        >
            {`${advantageVs} / ${advantageWith} | ${overall}`}
        </div>
    );
};

export default HeroBlockFooter;