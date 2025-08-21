import {FC, ImgHTMLAttributes} from 'react';
import {IHeroes} from "../../../types/IHeroes.ts";
import classes from './HeroImage.module.css'

type HeroImageProps = {
    hero: IHeroes;
    grayScale?:boolean;
} & ImgHTMLAttributes<HTMLImageElement>

const HeroImage: FC<HeroImageProps> = ({hero,grayScale,...rest}) => {
    return (
        <>
            <img src={hero.image}
                 className={[classes.hero__image,grayScale?classes.gray__filter:''].join(' ')}
                 alt={hero.name}
                 draggable={false}
                 {...rest}
            />
        </>
    );
};

export default HeroImage;