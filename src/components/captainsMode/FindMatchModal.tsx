import FormInput from "../UI/FormInput/FormInput.tsx";
import BigButton from "../UI/BigButton/BigButton.tsx";
import ModalWindow from "../UI/ModalWindow/ModalWindow.tsx";
import {ChangeEvent, FC, useMemo, useState} from "react";
import {useTypedDispatch} from "../../hooks/redux.ts";
import {pickedHeroSlice} from "../../store/slices/pickedHeroSlice.ts";
import {getPicks} from "../API/getPicks.ts";
import {pickOrderSlice} from "../../store/slices/pickOrderSlice.ts";

interface FindMatchModalProps {
    isFindMatchModalActive: boolean;
    setIsFindMatchModalActive: (state: boolean) => void;
}

const FindMatchModal: FC<FindMatchModalProps> = ({isFindMatchModalActive, setIsFindMatchModalActive}) => {
    const dispatch = useTypedDispatch()
    const {setPickedHeroes} = pickedHeroSlice.actions
    const {clearPicks, clearPickList} = pickOrderSlice.actions
    const [matchFindErrorMsg, setMatchFindErrorMsg] = useState<string | null>(null)
    const [matchId, setMatchId] = useState<string>('');

    const ErrorMsg = useMemo(() => {
        return matchFindErrorMsg ?? ''
    }, [matchFindErrorMsg])

    function matchIdValidation(): boolean {
        if (isNaN(+matchId)) {
            setMatchFindErrorMsg('Error! incorrect match id')
            return false
        }
        if (matchId.length !== 10) {
            setMatchFindErrorMsg('Error! incorrect match id')
            return false
        }

        return true
    }

    function ErrorMsgHandler(error: any) {
        switch (error.status) {
            case 404:
                setMatchFindErrorMsg('Error! Match not found')
                break;
            case error.status >= 500:
                setMatchFindErrorMsg('Error! Problems with the servers')
                break;
            default:
                setMatchFindErrorMsg(`Error! ${error.message}`)
        }
    }

    async function setPicksFromId() {
        if (!matchIdValidation()) {
            return
        }
        let importedPick = await getPicks(matchId)
        if (importedPick instanceof Error) {
            ErrorMsgHandler(importedPick)
            return
        }
        if (importedPick)
            if (importedPick.length === 10) {
                dispatch(clearPicks())
            } else {
                dispatch(clearPickList())
            }
        setMatchFindErrorMsg('')
        setMatchId('')
        dispatch(setPickedHeroes(importedPick))
        setIsFindMatchModalActive(false)
    }

    function offModal(state:boolean) {
        setMatchId('')
        setIsFindMatchModalActive(state)
        setMatchFindErrorMsg(null)
        console.log(matchId)
    }

    function findMatchInput(event: ChangeEvent<HTMLInputElement>) {
        event.stopPropagation()
        event.preventDefault()
        setMatchId(event.target.value)
        setMatchFindErrorMsg('')
    }
    return (
        <ModalWindow toggleModalFunc={offModal} isModalActive={isFindMatchModalActive}>
            <div className='find-match'
                 onClick={(event) => event.stopPropagation()}
            >
                <FormInput value={matchId} onChange={(event) => findMatchInput(event)}
                           placeholder='Match id'/>
                <BigButton onClick={setPicksFromId}>Find match</BigButton>
                <div className='Error__message'>{ErrorMsg}</div>
            </div>
        </ModalWindow>
    );
};

export default FindMatchModal;