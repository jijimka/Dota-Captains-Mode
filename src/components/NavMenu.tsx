import PopUpMenu from "./UI/PopUpMenu/PopUpMenu.tsx";
import {NavLink, useLocation} from "react-router";
import {PageRoutes} from "../models/PageRoutes.ts";

const NavMenu = () => {
    const asdf = useLocation()
    console.log(asdf)
    return (
        <>
            <PopUpMenu>
                <NavLink to={PageRoutes.IMMORTALDRAFTURL}>
                    <p className={['nav__text', asdf.pathname === PageRoutes.IMMORTALDRAFTURL?'nav__text__active':''].join(' ')}>Immortal Draft</p>

                </NavLink>
                <NavLink to={PageRoutes.CAPTAINSMODEURL}>
                    <p className={['nav__text', asdf.pathname === PageRoutes.CAPTAINSMODEURL?'nav__text__active':''].join(' ')}>Captains Mode</p>
                </NavLink>
            </PopUpMenu>
        </>
    );
};

export default NavMenu;