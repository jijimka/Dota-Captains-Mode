import {FC,} from 'react';
import {useTypedSelector} from "../../hooks/redux.ts";
import AttributeList from "./AttributeList.tsx";
import {AttributeIcons} from "../../models/AttributeIcons.ts";


const AllHeroesList: FC = () => {
    const {intHeroes, agiHeroes, uniHeroes, strHeroes} = useTypedSelector(state => state.heroes);
    return (
        <div
            className='all-heroes-list'
        >
            <AttributeList icon={AttributeIcons.STRENGTH} heroList={strHeroes} attribute={'Strength'}/>
            <AttributeList icon={AttributeIcons.AGILITY} heroList={agiHeroes} attribute={'Agility'}/>
            <AttributeList icon={AttributeIcons.INTELLIGENCE} heroList={intHeroes} attribute={'Intelligence'}/>
            <AttributeList icon={AttributeIcons.UNIVERSAL} heroList={uniHeroes} attribute={'Universal'}/>
        </div>
    );
};

export default AllHeroesList;