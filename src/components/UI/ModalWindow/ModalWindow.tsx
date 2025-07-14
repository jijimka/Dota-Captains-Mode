import classes from './ModalWindow.module.css'
import {FC} from "react";

interface ModalWindowProps {
    isModalActive: boolean;
    children: React.ReactNode;
}

const ModalWindow: FC<ModalWindowProps> = ({isModalActive, children}) => {

    return (

        <div className={[classes.modal, isModalActive ? classes.modalActive : ''].join(' ')}>
            {children}
        </div>

    );
};

export default ModalWindow;