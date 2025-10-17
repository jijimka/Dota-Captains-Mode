import classes from './ControlPanel.module.css'
import {FC, useState} from "react";

import Title from "../Title/Title.tsx";
import {useURLButtons} from "../../../hooks/useURLButtons.tsx";

interface ControlPanelProps {
    children: React.ReactNode
    title?:string;
}


const ControlPanel: FC<ControlPanelProps> = ({children}) => {
    const urlButtons = useURLButtons()
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
                {children}
                <div className='settings__nav'>
                    <Title>URLs </Title>
                    {urlButtons}
                </div>
            </div>
        </>
    );
};

export default ControlPanel;