import {FC, useEffect, useState} from "react";

interface SearchModalProps {
    search:string
}
const SearchModal:FC<SearchModalProps> = ({search}) => {
    const [modalTransition,setModalTransition] = useState<boolean>(false)

    function useModalAnimation() {
        const [modal,setModal] = useState<number>(0);

        useEffect(() => {
            setModalTransition(false)
            setModal(45)
        },[search])

        useEffect(() => {
            if (modal === 0) return
            setModalTransition(true)
            setModal(0)
        },[modal])
        return modal
    }

    return (
        <div
            className='searchModal'
            style={{
                opacity:`${useModalAnimation()}%`,
                transition: modalTransition?'0.4s ease-in all':'',
            }}
        >
            <div className='searchModal-text'>{search}</div>
        </div>
    );
};

export default SearchModal;