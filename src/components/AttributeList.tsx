import  {FC} from 'react';
import {IHeroes} from "../types/IHeroes.ts";
import HeroBlock from "./HeroBlock.tsx";

interface AttributeListProps {
    heroList: IHeroes[],
    attribute: string,
}

const AttributeList: FC<AttributeListProps> = ({heroList, attribute,}) => {


    return (
        <div className='heroes-list__attribute'>
            <h1 className='attribute__title'>{attribute} </h1>
            <div className='attribute__list'>
                {heroList.map(hero =>
                    <HeroBlock hero={hero}/>
                )}
            </div>
        </div>
    );
};

export default AttributeList;