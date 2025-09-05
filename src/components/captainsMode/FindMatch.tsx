import {useState} from 'react';
import FindMatchModal from "./FindMatchModal.tsx";

const FindMatch = () => {
    const [isFindMatchModalActive, setIsFindMatchModalActive] = useState<boolean>(false);

    function findMatchButtonHandler() {
        setIsFindMatchModalActive(true)
    }

    return (
        <div className='find-match'>
            <h2 className='picks-button' onClick={findMatchButtonHandler}>Get picks from match</h2>
            <FindMatchModal isFindMatchModalActive={isFindMatchModalActive}
                            setIsFindMatchModalActive={setIsFindMatchModalActive}
            />
        </div>
    );
};

export default FindMatch;