import {useMemo} from "react";
import {IPickedHero} from "../types/IHeroes.ts";

export const useDisplayPickedHero = (pickedHeroes: IPickedHero[], orderNumber: number, deleteHero: (pickedHero: IPickedHero) => void) => {
    const displayPickedHero = useMemo(() => {
        for (let i = 0; i < pickedHeroes.length; i++) {
            if (pickedHeroes[i].pick === orderNumber) {
                return (
                    <>
                        <img onClick={() => deleteHero(pickedHeroes[i])}
                             draggable={false}
                             className='pick__block-image'
                             src={pickedHeroes[i].hero.image}
                             alt={pickedHeroes[i].hero.name_english_loc}
                        />
                    </>
                )
            }
        }
        return <></>

    }, [pickedHeroes])
    return displayPickedHero
}