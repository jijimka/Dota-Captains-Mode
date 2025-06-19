import {FC} from 'react';
import {IHeroes} from "../../types/IHeroes.ts";
import HeroBlock from "./HeroBlock.tsx";
import AttributeIcon from "../UI/AttributeIcon/AttributeIcon.tsx";

interface AttributeListProps {
    heroList: IHeroes[],
    attribute: string,
    icon:string
}

const AttributeList: FC<AttributeListProps> = ({heroList, attribute,icon}) => {


    return (
        <div className='heroes-list__attribute'>
            <h1 className='attribute__title'>{attribute} <AttributeIcon src={icon} alt={attribute}/></h1>
            <div className='attribute__list'>
                {heroList.map(hero =>
                    <HeroBlock key={hero.id} hero={hero}/>
                )}
            </div>
        </div>
    );
};

export default AttributeList;