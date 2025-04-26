import {FC,} from 'react';
import {useTypedSelector} from "../hooks/redux.ts";
import AttributeList from "./AttributeList.tsx";


const AllHeroesList: FC = () => {
    const {intHeroes, agiHeroes, uniHeroes, strHeroes} = useTypedSelector(state => state.heroes);
    const attributeIcons = [
        "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png",
        "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png",
        "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png",
        "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_universal.png",
    ]
    return (
        <div
            className='all-heroes-list'
        >
            <AttributeList icon={attributeIcons[0]} heroList={strHeroes} attribute={'Strength'}/>
            <AttributeList icon={attributeIcons[1]} heroList={agiHeroes} attribute={'Agility'}/>
            <AttributeList icon={attributeIcons[2]} heroList={intHeroes} attribute={'Intelligence'}/>
            <AttributeList icon={attributeIcons[3]} heroList={uniHeroes} attribute={'Universal'}/>
        </div>
    );
};

export default AllHeroesList;