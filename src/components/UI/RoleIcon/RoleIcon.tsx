import {FC, ImgHTMLAttributes} from 'react';
import {RoleIcons} from "../../../models/RoleIcons.ts";
import classes from './RoleIcon.module.css'

interface RoleIconsInterface {
    roleNumber: number | null
}

type RoleIconsProps = ImgHTMLAttributes<HTMLImageElement> & RoleIconsInterface
const RoleIcon: FC<RoleIconsProps> = ({roleNumber}) => {

    function getIconSource(roleNumber: number | null): string {
        return roleNumber ? RoleIcons.getRoleIcons(roleNumber - 1) : ''
    }

    return (
        <>
            <img draggable='false' alt='role-icon' src={getIconSource(roleNumber)} className={classes.roleIcon}/>
        </>
    );
};

export default RoleIcon;