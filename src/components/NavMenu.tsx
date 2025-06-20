import PopUpMenu from "./UI/PopUpMenu/PopUpMenu.tsx";
import {NavLink} from "react-router";

const NavMenu = () => {
    return (
        <>
            <PopUpMenu>
                <NavLink to={'/Dota-Captains-Mode/ImmortalDraft'}>
                    Immortal Draft
                </NavLink>
                <NavLink to={'/Dota-Captains-Mode'}>
                    Captains Mode
                </NavLink>
            </PopUpMenu>
        </>
    );
};

export default NavMenu;