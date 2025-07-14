import {FC} from 'react';
import {IHeroes} from "../../../types/IHeroes.ts";
import classes from './HeroImage.module.css'

interface HeroImageProps {
    hero: IHeroes;
}

const HeroImage: FC<HeroImageProps> = ({hero}) => {
    return (
        <>
            <img src={hero.image}
                 className={classes.hero__image}
                 alt={hero.name}
                 draggable={false}
            />
        </>
    );
};

export default HeroImage;