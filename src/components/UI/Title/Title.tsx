import {FC, HTMLAttributes} from 'react';
import classes from './Title.module.css'
interface TitleInterface {
    children: React.ReactNode;
}


type TitleProps = HTMLAttributes<HTMLDivElement> & TitleInterface;
const Title:FC<TitleProps> = ({children, ...rest}) => {
    return (
        <div {...rest} className={classes.title}>
            {children}
        </div>
    );
};

export default Title;