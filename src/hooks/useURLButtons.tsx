import {useMemo} from "react";
import {PageRoutes} from "../models/PageRoutes.ts";
import {Link, useLocation} from "react-router";
import SmallButton from "../components/UI/SmallButton/SmallButton.tsx";

export function useURLButtons() {
    const location = useLocation()
    const allPagesArray = [
        {
            route:PageRoutes.CAPTAINSMODEURL,
            name: 'Captains mode',
        },
        {
            route:PageRoutes.IMMORTALDRAFTURL,
            name: 'Immortal draft',
        }
    ]

    const buttonsList = useMemo(() => {
        const pagesArray = allPagesArray.filter((page) => {
            return page.route !== location.pathname
        })
        return pagesArray.map(route =>
            <Link to={route.route}>
                <SmallButton>{route.name}</SmallButton>
            </Link>
        )
    }, [location])
    return buttonsList
}