import FormInput from "../UI/FormInput/FormInput.tsx";
import BigButton from "../UI/BigButton/BigButton.tsx";
import ModalWindow from "../UI/ModalWindow/ModalWindow.tsx";
import {ChangeEvent, FC, useEffect, useMemo, useState} from "react";
import {useTypedDispatch, useTypedSelector} from "../../hooks/redux.ts";
import {pickedHeroSlice} from "../../store/slices/pickedHeroSlice.ts";
import {getPicks} from "../../API/getPicks.ts";
import {pickOrderSlice} from "../../store/slices/pickOrderSlice.ts";
import {useLazyQuery} from "@apollo/client";
import {GET_MULTIPLE_MATCHUPS} from "../../API/STRATZ_QUERY.ts";
import {IPickedHero} from "../../types/IHeroes.ts";
import {getIdsFromPicksArray} from "../../utils/getIdsFromPicksArray/getIdsFromPicksArray.ts";
import {getPicksFromAllPicksArray} from "../../utils/getPicksFromAllPicksArray/getPicksFromAllPicksArray.ts";
import {getNewSynergyArray} from "../../utils/getNewSynergyArray/getNewSynergyArray.ts";
import {PickOrder} from "../../models/PickOrder.ts";
import {heroSynergySlice} from "../../store/slices/heroSynergySlice.ts";

interface FindMatchModalProps {
    isFindMatchModalActive: boolean;
    setIsFindMatchModalActive: (state: boolean) => void;
}

const FindMatchModal: FC<FindMatchModalProps> = ({isFindMatchModalActive, setIsFindMatchModalActive}) => {
    const [getMultipleMatchups, {data, loading}] = useLazyQuery(GET_MULTIPLE_MATCHUPS())
    const {
        radiantAdvantageVs,
        radiantAdvantageWith,
        direAdvantageWith,
        direAdvantageVs
    } = useTypedSelector(state => state.synergyData)
    const {
        setRadiantAdvantageVsData,
        setRadiantAdvantageWithData,
        setDireAdvantageWithData,
        setDireAdvantageVsData
    } = heroSynergySlice.actions
    const [fetchHeroes,setFetchHeroes] = useState<IPickedHero[]>([])
    const [fetchCounter,setFetchCounter] = useState<number>(0)
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
    function setSynergys() {
        const matchupsArray = data.heroStats.matchUp
        console.log(matchupsArray)
        let prevDireVsAdvantage = direAdvantageVs
        let prevDireWithAdvantage = direAdvantageWith
        let prevRadiantVsAdvantage = radiantAdvantageVs
        let prevRadiantWithAdvantage = radiantAdvantageWith

        matchupsArray.forEach((matchUp:any,index:number) => {
            const pick = fetchHeroes[index]
            const isRadiantPick = PickOrder.radiantPicks.includes(pick.pick)
            if (isRadiantPick) {
                [prevDireVsAdvantage,prevRadiantWithAdvantage] = getNewSynergyArray(matchUp.vs,matchUp.with,prevDireVsAdvantage,prevRadiantWithAdvantage)
            } else {
                [prevRadiantVsAdvantage,prevDireWithAdvantage] = getNewSynergyArray(matchUp.vs,matchUp.with,prevRadiantVsAdvantage,prevDireWithAdvantage)
            }
        })
        dispatch(setRadiantAdvantageVsData(prevRadiantVsAdvantage))
        dispatch(setRadiantAdvantageWithData(prevRadiantWithAdvantage))
        dispatch(setDireAdvantageVsData(prevDireVsAdvantage))
        dispatch(setDireAdvantageWithData(prevDireWithAdvantage))
    }

    function setPicks(importedPick: IPickedHero[]) {
        setMatchFindErrorMsg('')
        setMatchId('')
        const heroIds = getIdsFromPicksArray(getPicksFromAllPicksArray(importedPick))
        setFetchCounter(fetchCounter+1)
        setFetchHeroes(getPicksFromAllPicksArray(importedPick))
        getMultipleMatchups({variables: {heroIds}})
        dispatch(setPickedHeroes(importedPick))
        setIsFindMatchModalActive(false)
    }

    async function getPicksFromId() {
        if (!matchIdValidation()) {
            return
        }
        let importedPick = await getPicks(matchId)
        if (importedPick instanceof Error) {
            ErrorMsgHandler(importedPick)
            return
        }
        if (importedPick.length === 10) {
            dispatch(clearPicks())
        } else {
            dispatch(clearPickList())
        }
        setPicks(importedPick)
    }

    function offModal(state: boolean) {
        setMatchId('')
        setIsFindMatchModalActive(state)
        setMatchFindErrorMsg(null)
    }

    function findMatchInput(event: ChangeEvent<HTMLInputElement>) {
        event.stopPropagation()
        event.preventDefault()
        setMatchId(event.target.value)
        setMatchFindErrorMsg('')
    }

    useEffect(() => {
        if (!loading && data) {
            setSynergys()
        }
    }, [loading,data,fetchCounter]);
    return (
        <ModalWindow toggleModalFunc={offModal} isModalActive={isFindMatchModalActive}>
            <div className='find-match'
                 onClick={(event) => event.stopPropagation()}
            >
                <FormInput value={matchId} onChange={(event) => findMatchInput(event)}
                           placeholder='Match id'/>
                <BigButton onClick={getPicksFromId}>Find match</BigButton>
                <div className='Error__message'>{ErrorMsg}</div>
            </div>
        </ModalWindow>
    );
};

export default FindMatchModal;