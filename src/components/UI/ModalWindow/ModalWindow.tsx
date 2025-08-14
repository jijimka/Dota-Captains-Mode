import classes from './ModalWindow.module.css'
import {FC,} from "react";

interface ModalWindowProps {
    isModalActive: boolean;
    children: React.ReactNode;
    toggleModalFunc?: (state:boolean) => void;
}

const ModalWindow: FC<ModalWindowProps> = ({isModalActive, children,toggleModalFunc}) => {
    function toggleModal() {
        toggleModalFunc?toggleModalFunc(!isModalActive):null

    }
    return (
        <div
            className={[classes.modal, isModalActive ? classes.modalActive : ''].join(' ')}
            onClick={toggleModal}
            tabIndex={0}
            onKeyDownCapture={(event) => event.stopPropagation()}
        >
            <div onClick={event => event.stopPropagation()} className={classes.modalContent}>
            {children}
            </div>
        </div>

    );
};

export default ModalWindow;