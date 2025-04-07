import  {FC} from 'react';
import {IHeroes} from "../types/IHeroes.ts";

interface AttributeListProps {
    heroList: IHeroes[],
    attribute: string,
}

const AttributeList: FC<AttributeListProps> = ({heroList, attribute,}) => {

    return (
        <div className='heroes-list__attribute'>
            <h1 className='attribute__title'>{attribute}</h1>
            <div className='attribute__list'>
                {heroList.map(hero =>
                    <div  className='attribute__image-container'>
                        <img src={hero.image} className='image-container__image' alt={hero.name}/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AttributeList;