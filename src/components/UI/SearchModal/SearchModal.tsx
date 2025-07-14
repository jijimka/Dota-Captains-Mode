import {FC, useEffect, useState} from "react";
import classes from './SearchModal.module.css'

interface SearchModalProps {
    search: string
}

const SearchModal: FC<SearchModalProps> = ({search}) => {
    const [modalTransition, setModalTransition] = useState<boolean>(false)

    function useModalAnimation() {
        const [modal, setModal] = useState<number>(0);

        useEffect(() => {
            setModalTransition(false)
            // opacity of modal when activated or how dark modal will be
            setModal(45)
        }, [search])

        useEffect(() => {
            if (modal === 0) return
            setModalTransition(true)
            setModal(0)
        }, [modal])
        return modal
    }

    return (
        <div
            className={classes.searchModal}
            style={{
                opacity: `${useModalAnimation()}%`,
                transition: modalTransition ? '0.4s ease-in all' : '',
            }}
        >
            <div className={classes.searchModalText}>{search}</div>
        </div>
    );
};

export default SearchModal;