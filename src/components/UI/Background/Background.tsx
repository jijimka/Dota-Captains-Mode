import classes from './Background.module.css'
import {FC} from "react";
interface BackgroundProps {
    lightVersion?: boolean;
}
const Background:FC<BackgroundProps> = ({lightVersion}) => {
    const bgclasses = [
        classes.background
    ]
    if (lightVersion) {
        bgclasses.push(classes.light)
    } else {
        bgclasses.push(classes.dark)
    }
    return (
        <div className={bgclasses.join(' ')}></div>
    );
};

export default Background;