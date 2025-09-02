import {FC, ImgHTMLAttributes, useState} from 'react';
import {IHeroes} from "../../../types/IHeroes.ts";
import classes from './HeroImage.module.css'

type HeroImageProps = {
    hero: IHeroes;
    grayScale?: boolean;
} & ImgHTMLAttributes<HTMLImageElement>

const HeroImage: FC<HeroImageProps> = ({hero, grayScale, ...rest}) => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    return (
        <div className={classes.wrapper}>
            {isLoading && (
                <div className={[classes.loadingDiv].join(' ')}>
                    <div className={classes.loadingSpin}>
                        /
                    </div>
                </div>
            )}
            <img src={hero.image}
                 className={[classes.hero__image,grayScale?classes.gray__filter:''].join(' ')}
                 alt={hero.name}
                 draggable={false}
                 style={{display:`${isLoading?'none':'inherit'}`}}
                 onLoad={() => setIsLoading(false)}
                 {...rest}
            />
        </div>
    );
};

export default HeroImage;