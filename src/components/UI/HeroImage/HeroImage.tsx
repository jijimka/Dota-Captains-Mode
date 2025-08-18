import {FC} from 'react';
import {IHeroes} from "../../../types/IHeroes.ts";
import classes from './HeroImage.module.css'

interface HeroImageProps {
    hero: IHeroes;
    grayScale?:boolean;
}

const HeroImage: FC<HeroImageProps> = ({hero,grayScale}) => {
    return (
        <>
            <img src={hero.image}
                 className={[classes.hero__image,grayScale?classes.gray__filter:''].join(' ')}
                 alt={hero.name}
                 draggable={false}
            />
        </>
    );
};

export default HeroImage;