import {FC, MouseEventHandler, useState} from "react";
import classes from './TextPopup.module.css'
interface TextPopupProps {
    children?: React.ReactNode;
    content: string,

}

const TextPopup: FC<TextPopupProps> = ({children, content}) => {
    const [popupClasses,setPopupClasses] = useState<string[]>([classes.textPopupContent])
    function mouseEnterFunc(event:React.MouseEvent<HTMLDivElement>) {
        setPopupClasses([...popupClasses,classes.textPopupActive])
    }
    function mouseLeaveFunc(event:React.MouseEvent<HTMLDivElement>) {
        setPopupClasses([classes.textPopupContent])
    }
    return (
        <div onMouseEnter={(event) => mouseEnterFunc(event)}
             className={classes.textPopup}
             onMouseLeave={(event) => mouseLeaveFunc(event)}
        >
            {children}
            <div className={popupClasses.join(' ')}>
                {content}
            </div>
        </div>
    );
};

export default TextPopup;