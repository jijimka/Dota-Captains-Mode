import {FC} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {Player} from "../../../models/Player.ts";
import classes from './PlayerForm.module.css'
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup";
import {InferType} from "yup";
import {useTypedDispatch, useTypedSelector} from "../../../hooks/redux.ts";
import {playerListSlice} from "../../../store/slices/playerListSlice.ts";
import FormInput from "../FormInput/FormInput.tsx";
import FormCheckbox from "../FormCheckbox/FormCheckbox.tsx";
import ModalWindow from "../ModalWindow/ModalWindow.tsx";
import {getRandomPlayer} from "../../../utils/getRandomPlayer.tsx";
import {useDisplayError} from "../../../hooks/useDisplayError.tsx";
import TextPopup from "../TextPopup/TextPopup.tsx";


const PlayerForm: FC = () => {
    const players = useTypedSelector(state => state.playerList.playerList)
    const dispatch = useTypedDispatch()
    const {addPlayer} = playerListSlice.actions
    const validateScheme = yup.object({
        nickname: yup.string().required().max(25),
        mmr: yup.number().moreThan(-1).lessThan(100000).required().nullable().integer().transform((value) => isNaN(value) ? null : value),
        roles: yup.array().of(yup.number().min(1).max(5).required().nullable()).required()
    }).required()

    const {register, handleSubmit,reset, formState: {errors}} = useForm<InferType<typeof validateScheme>>({
        resolver: yupResolver(validateScheme),
        defaultValues: {
            nickname: undefined,
            mmr: null,
            roles: [],
        }
    })

    const onSubmit: SubmitHandler<InferType<typeof validateScheme>> = (data) => {
        console.log(data)
        const newPlayer = new Player(data.nickname, data.mmr, data.roles)
        submitNewPlayer(newPlayer)
        reset()
    }
    function submitNewPlayer(player:Player):void {
        dispatch(addPlayer(player))
    }

    function autoFill() {
        for (let i = players.length; i < 10; i++) {
            submitNewPlayer(getRandomPlayer(i))
        }
    }
    console.log(Object.values(errors))
    return (
        <ModalWindow isModalActive={players.length < 10}>
            <form className={classes.playerForm} onSubmit={handleSubmit(onSubmit)}>
                <div className={classes.playerFormNickname}>
                    <label className={classes.formLabel} htmlFor='nickname'><TextPopup content={'Required field'}>Nickname*</TextPopup></label>
                    <FormInput {...register('nickname')} autoComplete={'off'} id='nickname'/>
                </div>
                <div className={classes.playerFormRoles}>
                    <label className={classes.formLabel}>Preferred Role</label>
                    <FormCheckbox labelName={'Carry'} labelId={'carry'} value='1' {...register('roles')}/>
                    <FormCheckbox labelName={'Midlane'} labelId={'midlane'} value='2' {...register('roles')}/>
                    <FormCheckbox labelName={'Offlane'} labelId={'offlane'} value='3' {...register('roles')} />
                    <FormCheckbox labelName={'Soft Support'} labelId={'softSupport'} value='4' {...register('roles')}/>
                    <FormCheckbox labelName={'Support'} labelId={'support'} value='5' {...register('roles')}/>
                </div>
                <div className={classes.playerFormMMR}>
                    <label className={classes.formLabel} htmlFor='mmr'>MMR</label>
                    <FormInput {...register('mmr')} autoComplete={'off'} id='mmr'/>
                </div>
                <button className={classes.formButton} type='submit'>Create Player</button>
                <div className={classes.formError}>{useDisplayError(errors)}</div>
            </form>
            <div className={classes.formControl}>
                <div onClick={autoFill} className={classes.formControlButton}>Auto fill players</div>
                <div onClick={() => submitNewPlayer(getRandomPlayer(players.length))} className={classes.formControlButton}>Add 1 random player</div>
            </div>
        </ModalWindow>
    );
};

export default PlayerForm;