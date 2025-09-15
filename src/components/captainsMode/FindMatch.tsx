import {useState} from 'react';
import FindMatchModal from "./FindMatchModal.tsx";
import SmallButton from "../UI/SmallButton/SmallButton.tsx";

const FindMatch = () => {
    const [isFindMatchModalActive, setIsFindMatchModalActive] = useState<boolean>(false);

    function findMatchButtonHandler() {
        setIsFindMatchModalActive(true)
    }

    return (
        <SmallButton clickFunction={findMatchButtonHandler}>
            <h2 className='picks-button'>Get picks from match</h2>
            <FindMatchModal isFindMatchModalActive={isFindMatchModalActive}
                            setIsFindMatchModalActive={setIsFindMatchModalActive}
            />
        </SmallButton>
    );
};

export default FindMatch;