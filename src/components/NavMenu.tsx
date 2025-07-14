import PopUpMenu from "./UI/PopUpMenu/PopUpMenu.tsx";
import {NavLink, useLocation} from "react-router";
import {PageRoutes} from "../models/PageRoutes.ts";

const NavMenu = () => {
    const location = useLocation()
    console.log(location)
    return (
        <>
            <PopUpMenu>
                <NavLink to={PageRoutes.CAPTAINSMODEURL}>
                    <p className={['nav__text', location.pathname === PageRoutes.CAPTAINSMODEURL ? 'nav__text__active' : ''].join(' ')}>Captains
                        Mode</p>
                </NavLink>
                <NavLink to={PageRoutes.IMMORTALDRAFTURL}>
                    <p className={['nav__text', location.pathname === PageRoutes.IMMORTALDRAFTURL ? 'nav__text__active' : ''].join(' ')}>Immortal
                        Draft</p>
                </NavLink>
            </PopUpMenu>
        </>
    );
};

export default NavMenu;