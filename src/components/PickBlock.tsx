import {FC, useMemo} from 'react';
import {useTypedSelector} from "../hooks/redux.ts";
interface PickBlockProps {
    orderNumber:number;
}
const PickBlock:FC<PickBlockProps> = ({orderNumber}) => {
    const picks = [8,9,13,14,15,16,17,18,23,24]
    const dire = [2,3,5,6,9,12,13,16,17,20,21,24]
    const orderClasses = ['pick__block-order']
    const {pickedHeroes,pickNumber} = useTypedSelector(state => state.pickedHeroes)
    const blockClasses:string[] = []

    const displayPickedHero = useMemo(() => {
        for (let i = 0; i < pickedHeroes.length; i++) {
            if (pickedHeroes[i].pick === orderNumber) {
                return (
                    <>
                        <img className='pick__block-image' src={pickedHeroes[i].hero.image} />
                    </>
                )
            }
        }
        return <></>
    },[pickedHeroes])

    if (!picks.includes(orderNumber)) {
        blockClasses.push('pick__block-ban')
    } else {
        blockClasses.push('pick__block')
    }
    if (pickNumber === orderNumber) {
        blockClasses.push('pick-block__active')
    }
    if (dire.includes(orderNumber)) {
        orderClasses.push('direOrder')
    }

    return (
        <div className='pick-side__block'>
            <div className={blockClasses.join(' ')}>
                {displayPickedHero}
            </div>
            <p className={orderClasses.join(' ')}>{orderNumber}</p>
        </div>
    );
};

export default PickBlock;