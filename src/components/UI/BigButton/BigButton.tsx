import React, {ButtonHTMLAttributes, FC} from 'react';
import classes from './BigButton.module.css'

interface BigButtonReq {
    children: React.ReactNode
}
type BigButtonProps = BigButtonReq & ButtonHTMLAttributes<HTMLButtonElement>


const BigButton:FC<BigButtonProps> = ({children,...rest}) => {
    return (
        <button className={classes.bigButton} {...rest}>
            {children}
        </button>
    );
};

export default BigButton;