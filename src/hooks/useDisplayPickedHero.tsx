import {useMemo} from "react";
import {useTypedDispatch, useTypedSelector} from "./redux.ts";
import {IPickedHero} from "../types/IHeroes.ts";
import {pickedHeroSlice} from "../store/slices/pickedHeroSlice.ts";
import {pickOrderSlice} from "../store/slices/pickOrderSlice.ts";
import HeroImage from "../components/UI/HeroImage/HeroImage.tsx";

//<img onClick={() => deleteHero(pickedHeroes[i])}
//                              draggable={false}
//                              className='pick__block-image'
//                              src={pickedHeroes[i].hero.image}
//                              alt={pickedHeroes[i].hero.name_english_loc}
//                         />
export const useDisplayPickedHero = (orderNumber: number,) => {
    const dispatch = useTypedDispatch();
    const {removePickedHero} = pickedHeroSlice.actions
    const {addPickQueue} = pickOrderSlice.actions
    const {selectedPick,pickQueue} = useTypedSelector(state => state.pickOrder)
    const {pickedHeroes,confirmHero} = useTypedSelector(state => state.pickedHeroes)
    const {isSynergyActive} = useTypedSelector(state => state.synergyData)
    const nextPickNumber = selectedPick??pickQueue[0]

    function deleteHero(hero: IPickedHero) {
        dispatch(removePickedHero(hero.hero))
        dispatch(addPickQueue(hero.pick))
    }

    const displayPickedHero = useMemo(() => {
        for (let i = 0; i < pickedHeroes.length; i++) {
            if (pickedHeroes[i].pick === orderNumber) {
                return (
                    <>
                        <HeroImage hero={pickedHeroes[i].hero}
                                   onClick={() => deleteHero(pickedHeroes[i])}
                        />
                    </>
                )
            }
        }
        if (!isSynergyActive && confirmHero && nextPickNumber === orderNumber) {
            return (
                <>
                    <HeroImage hero={confirmHero}
                               grayScale={true}
                    />
                </>
            )
        }
        return <></>

    }, [pickedHeroes,confirmHero,selectedPick,pickQueue])
    return displayPickedHero
}