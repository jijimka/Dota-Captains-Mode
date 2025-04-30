import {FC, useMemo, useState} from 'react';
import {useTypedDispatch, useTypedSelector} from "../hooks/redux.ts";
import {pickOrderSlice} from "../store/slices/pickOrderSlice.ts";
import {pickedHeroSlice} from "../store/slices/pickedHeroSlice.ts";
import {IPickedHero} from "../types/IHeroes.ts";
import {getPickBlockClasses} from "../utils/getPickBlockClasses.ts";

interface PickBlockProps {
    orderNumber: number;
}

const PickBlock: FC<PickBlockProps> = ({orderNumber}) => {
    const dispatch = useTypedDispatch()
    const orderClasses = ['pick__block-order']
    const {pickedHeroes} = useTypedSelector(state => state.pickedHeroes)
    const {pickQueue, selectedPick,} = useTypedSelector(state => state.pickOrder)
    const {removePickedHero} = pickedHeroSlice.actions
    const {selectPick, addPickQueue} = pickOrderSlice.actions
    const [heroPicked, setHeroPicked] = useState<boolean>(false)
    const blockClasses = getPickBlockClasses(orderNumber, selectedPick, pickQueue)

    const displayPickedHero = useMemo(() => {
        for (let i = 0; i < pickedHeroes.length; i++) {
            if (pickedHeroes[i].pick === orderNumber) {
                setHeroPicked(true)
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

    function deleteHero(hero: IPickedHero) {
        dispatch(removePickedHero(hero.hero))
        dispatch(addPickQueue(hero.pick))
        setHeroPicked(false)
    }

    function selectPickOrder() {
        if (heroPicked) return
        dispatch(selectPick(orderNumber))
    }

    return (
        <div onClick={selectPickOrder} className='pick-side__block'>
            <div className={blockClasses.join(' ')}>
                {displayPickedHero}
            </div>
            <p className={orderClasses.join(' ')}>{orderNumber}</p>
        </div>
    );
};

export default PickBlock;