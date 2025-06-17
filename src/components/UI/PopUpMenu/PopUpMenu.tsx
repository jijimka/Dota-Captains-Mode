import classes from './PopUpMenu.module.css'
import {FC, useState} from "react";
interface PopUpMenuProps {
    children: React.ReactNode;
}
const PopUpMenu:FC<PopUpMenuProps> = ({children}) => {
    const [isActive,setIsActive] = useState<boolean>(false)
    const buttonClasses = [classes.button__text]
    const popUpClasses = [classes.popUpMenu__content]

    if (isActive) {
        buttonClasses.push(classes.button__active)
        popUpClasses.push(classes.active)
    }

    return (
        <>
            <div className={popUpClasses.join(' ')}>
                {children}
            </div>
            <div onClick={() => setIsActive(!isActive)} className={classes.popUpMenu__button}>
                <p className={buttonClasses.join(' ')}>^</p>
            </div>
        </>
    );
};

export default PopUpMenu;