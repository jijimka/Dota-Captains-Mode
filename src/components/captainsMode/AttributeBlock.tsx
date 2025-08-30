import {FC} from 'react';
import {IHeroes} from "../../types/IHeroes.ts";
import AttributeIcon from "../UI/AttributeIcon/AttributeIcon.tsx";
import {useSortedBySynergyHeroList} from "../../hooks/useSortedBySynergyHeroList.tsx";
import {sortHeroesArray} from "../../utils/sortHeroesArray/sortHeroesArray.ts";

interface AttributeListProps {
    heroList: IHeroes[],
    attribute: string,
    icon: string
}

const AttributeBlock: FC<AttributeListProps> = ({heroList, attribute, icon}) => {
    const heroes = sortHeroesArray(heroList)
    const heroesSortedBySynergy = useSortedBySynergyHeroList(heroes)
    return (
        <div className={['heroes-list__attribute', attribute === 'Universal' ? 'universal' : ''].join(' ')}>
            <h1 className='attribute__title'>
                <AttributeIcon src={icon} alt={attribute}/>
                {attribute}
            </h1>
            <div className='attribute__list'>
                {heroesSortedBySynergy}
            </div>
        </div>
    );
};

export default AttributeBlock;