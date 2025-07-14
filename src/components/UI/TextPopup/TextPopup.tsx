import {FC, useState} from "react";
import classes from './TextPopup.module.css'

interface TextPopupProps {
    children?: React.ReactNode;
    content: string,

}

const TextPopup: FC<TextPopupProps> = ({children, content}) => {
    const [popupClasses, setPopupClasses] = useState<string[]>([classes.textPopupContent])

    function mouseEnterFunc() {
        setPopupClasses([...popupClasses, classes.textPopupActive])
    }

    function mouseLeaveFunc() {
        setPopupClasses([classes.textPopupContent])
    }

    return (
        <div onMouseEnter={() => mouseEnterFunc()}
             className={classes.textPopup}
             onMouseLeave={() => mouseLeaveFunc()}
        >
            {children}
            <div className={popupClasses.join(' ')}>
                {content}
            </div>
        </div>
    );
};

export default TextPopup;