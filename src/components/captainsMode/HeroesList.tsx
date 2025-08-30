import {FC} from 'react';
import {IHeroes} from "../../types/IHeroes.ts";
import HeroBlock from "./HeroBlock.tsx";

interface HeroesListProps {
    heroesList: IHeroes[]
}

const HeroesList: FC<HeroesListProps> = ({heroesList}) => {
    return (
        <>
            {heroesList.map((hero) =>
                <HeroBlock hero={hero}/>
            )}
        </>
    );
};

export default HeroesList;