import {FC} from 'react';
import classes from './AttributeIcon.module.css'

interface AttributeIconProps {
    src: string,
    alt?: string,
}

const AttributeIcon: FC<AttributeIconProps> = ({src, alt}) => {
    return (
        <>
            <img className={classes.attribute__icon} src={src} alt={alt} draggable={false}/>
        </>
    );
};

export default AttributeIcon;