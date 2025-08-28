import {FC} from "react";

interface ControlPanelProps {
    children: React.ReactNode;
}

const ControlPanel: FC<ControlPanelProps> = ({children}) => {

    return (
        <div className='control-panel'>
            {children}
        </div>
    );
};

export default ControlPanel;