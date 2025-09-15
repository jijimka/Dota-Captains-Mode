import {ButtonHTMLAttributes, FC} from "react";
import classes from './SmallButton.module.css'
type SmallButtonProps = {
    children: React.ReactNode;
    clickFunction: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const SmallButton: FC<SmallButtonProps> = ({children, clickFunction,...rest}) => {
    return (
        <button onClick={clickFunction}
             {...rest}
            className={classes.smallButton}
        >
            {children}
        </button>
    );
};

export default SmallButton;