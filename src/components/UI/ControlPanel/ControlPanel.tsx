import classes from './ControlPanel.module.css'
import {FC, useState} from "react";

interface ControlPanelProps {
    children: React.ReactNode
    title?:string;
}

const ControlPanel: FC<ControlPanelProps> = ({children,title}) => {
    const [isPanelActive,setIsPanelActive] = useState<boolean>(false)
    function controlPanelClicked() {
        setIsPanelActive(!isPanelActive)
    }
    return (
        <>
            <div className={classes.controlPanel__bttn} onClick={controlPanelClicked}>
                ☰
            </div>
            <div className={[classes.controlPanel,isPanelActive?classes.controlPanel__active:''].join(' ')}>
                <p className={classes.controlPanel__title}>{title}</p>
                {children}
            </div>
        </>
    );
};

export default ControlPanel;