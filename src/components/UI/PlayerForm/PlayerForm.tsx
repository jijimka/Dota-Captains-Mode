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


const PlayerForm: FC = () => {
    const players = useTypedSelector(state => state.playerList.playerList)
    const dispatch = useTypedDispatch()
    const {addPlayer} = playerListSlice.actions
    const validateScheme = yup.object({
        nickname: yup.string().required(),
        mmr: yup.number().moreThan(-1).lessThan(99999).required().nullable().integer().transform((value) => isNaN(value) ? null : value),
        roles: yup.array().of(yup.number().min(1).max(5).required().nullable()).required()
    }).required()

    const {register, handleSubmit, formState: {errors}} = useForm<InferType<typeof validateScheme>>({
        resolver: yupResolver(validateScheme),
        defaultValues: {
            nickname: undefined,
            mmr: null,
            roles: [],
        }
    })
    const formClasses = [classes.formModal]


    const onSubmit: SubmitHandler<InferType<typeof validateScheme>> = (data) => {
        console.log(data)
        const newPlayer = new Player(data.nickname, data.mmr, data.roles)
        dispatch(addPlayer(newPlayer))

    }


    if (players.length < 10) {
        formClasses.push(classes.formActive)
    }
    console.log(errors)
    return (
        <div className={formClasses.join(' ')}>
            <form className={classes.playerForm} onSubmit={handleSubmit(onSubmit)}>
                <div className={classes.playerFormNickname}>
                    <label className={classes.formLabel} htmlFor='nickname'>Nickname</label>
                    <FormInput {...register('nickname')} autoComplete={'off'} id='nickname'/>
                </div>
                <div className={classes.playerFormRoles}>
                    <label className={classes.formLabel}>Preferred Role</label>
                    <FormCheckbox labelName={'Carry'} labelId={'carry'} value='1' {...register('roles')}/>
                    <FormCheckbox labelName={'Midlane'} labelId={'midlane'} value='2' {...register('roles')}/>
                    <FormCheckbox labelName={'Offlane'} labelId={'offlane'} value='3' {...register('roles')} />
                    <FormCheckbox labelName={'soft support'} value='4' labelId={'softSupport'} {...register('roles')}/>
                    <FormCheckbox labelName={'support'} labelId={'support'} value='5' {...register('roles')}/>
                </div>
                <div className={classes.playerFormMMR}>
                    <label className={classes.formLabel} htmlFor='mmr'>MMR</label>
                    <FormInput {...register('mmr')} autoComplete={'off'} id='mmr'/>
                </div>
                <button className={classes.formButton} type='submit'>Create Player</button>
            </form>
        </div>
    );
};

export default PlayerForm;