import {FC,} from 'react';
import {useTypedSelector} from "../hooks/redux.ts";
import AttributeList from "./AttributeList.tsx";


const AllHeroesList:FC = () => {
    const {intHeroes,agiHeroes,uniHeroes,strHeroes} = useTypedSelector(state => state.heroes);
    return (
        <div
            className='all-heroes-list'
        >

            <AttributeList  heroList={strHeroes} attribute={'Strength'}/>
            <AttributeList  heroList={agiHeroes} attribute={'Agility'}/>
            <AttributeList  heroList={intHeroes} attribute={'Intelligence'}/>
            <AttributeList  heroList={uniHeroes} attribute={'Universal'}/>
        </div>
    );
};

export default AllHeroesList;