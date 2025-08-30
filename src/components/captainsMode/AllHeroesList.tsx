import {FC,} from 'react';
import {useTypedSelector} from "../../hooks/redux.ts";
import AttributeBlock from "./AttributeBlock.tsx";
import {AttributeIcons} from "../../models/AttributeIcons.ts";
import {IHeroes} from "../../types/IHeroes.ts";

type attributeProps = {
    icon: string,
    heroList: IHeroes[],
    attribute: string,
}
const AllHeroesList: FC = () => {
    const {intHeroes, agiHeroes, uniHeroes, strHeroes} = useTypedSelector(state => state.heroes);
    const attributesList: attributeProps[] = [
        {
            icon: AttributeIcons.STRENGTH,
            heroList: strHeroes,
            attribute: 'Strength'
        },
        {
            icon: AttributeIcons.AGILITY,
            heroList: agiHeroes,
            attribute: 'Agility'
        },
        {
            icon: AttributeIcons.INTELLIGENCE,
            heroList: intHeroes,
            attribute: 'Intelligence'
        },
        {
            icon: AttributeIcons.UNIVERSAL,
            heroList: uniHeroes,
            attribute: 'Universal'
        },

    ]
    return (
        <div className='all-heroes-list'>
            {attributesList.map(list =>
                <AttributeBlock heroList={list.heroList} attribute={list.attribute} icon={list.icon}/>
            )}
        </div>
    );
};

export default AllHeroesList;