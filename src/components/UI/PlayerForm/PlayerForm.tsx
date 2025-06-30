import {FC} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {Player} from "../../../models/Player.ts";
import classes from './PlayerForm.module.css'
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup";
import {InferType} from "yup";
import {useTypedDispatch, useTypedSelector} from "../../../hooks/redux.ts";
import {playerListSlice} from "../../../store/slices/playerListSlice.ts";


const PlayerForm: FC = () => {
    const players = useTypedSelector(state => state.playerList.playerList)
    const dispatch = useTypedDispatch()
    const {addPlayer} = playerListSlice.actions
    const validateScheme = yup.object({
        nickname: yup.string().required(),
        mmr: yup.number().moreThan(-1).lessThan(99999).required().nullable().integer().transform((value) => isNaN(value) ? null : value),
        roles: yup.array().of(yup.number().min(1).max(5).required().nullable()).required()
    }).required()

    const {register, handleSubmit,} = useForm<InferType<typeof validateScheme>>({
        resolver: yupResolver(validateScheme),
        defaultValues: {
            nickname: undefined,
            mmr: null,
            roles: [],
        }
    })
    const formClasses = [classes.formModal]


    const onSubmit: SubmitHandler<InferType<typeof validateScheme>> = (data) => {
        const newPlayer = new Player(data.nickname, data.mmr, data.roles)
        dispatch(addPlayer(newPlayer))
    }


    if (players.length < 10) {
        formClasses.push(classes.formActive)
    }

    return (
        <div className={formClasses.join(' ')}>
            <form className={classes.playerForm} onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor='nickname'>Nickname</label>
                <input {...register('nickname')} autoComplete={'off'} id='nickname'/>
                <div className={classes.playerFormRoles}>
                    <label>Preferred Role</label>
                    <div className={classes.rolesCheckbox}>
                        <label htmlFor='carry'>Carry</label>
                        <input type='checkbox' value='1' id='carry' placeholder='1' {...register('roles')}/>
                    </div>
                    <div className={classes.rolesCheckbox}>
                        <label htmlFor='midlane'>Midlane</label>
                        <input type='checkbox' value='2' id='midlane' placeholder='2' {...register('roles')}/>
                    </div>
                    <div className={classes.rolesCheckbox}>
                        <label htmlFor='offlane'>Offlane</label>
                        <input type='checkbox' value='3' id='offlane' placeholder='3' {...register('roles')}/>
                    </div>
                    <div className={classes.rolesCheckbox}>
                        <label htmlFor='softSupport'>Soft support</label>
                        <input type='checkbox' value='4' id='softSupport' placeholder='4' {...register('roles')}/>
                    </div>
                    <div className={classes.rolesCheckbox}>
                        <label htmlFor='support'>Support</label>
                        <input type='checkbox' value='5' id='support' placeholder='5' {...register('roles')}/>
                    </div>
                </div>
                <label htmlFor='mmr'>MMR</label>
                <input {...register('mmr')} autoComplete={'off'} id='mmr'/>
                <button type='submit'>Create Player</button>
            </form>
            {}
        </div>
    );
};

export default PlayerForm;