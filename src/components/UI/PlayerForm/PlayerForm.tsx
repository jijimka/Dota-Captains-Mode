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
import {getRandomPlayer} from "../../../utils/getRandomPlayer/getRandomPlayer.ts";
import {useDisplayError} from "../../../hooks/useDisplayError.tsx";
import TextPopup from "../TextPopup/TextPopup.tsx";
import RoleIcon from "../RoleIcon/RoleIcon.tsx";
import BigButton from "../BigButton/BigButton.tsx";

type prefRoleListProps = {
    labelName: string,
    value: string,
}
const PlayerForm: FC = () => {
    const players = useTypedSelector(state => state.playerList.playerList)
    const dispatch = useTypedDispatch()
    const {addPlayer} = playerListSlice.actions
    const prefferedRoleList: prefRoleListProps[] = [
        {
            labelName: 'Carry',
            value: '1',
        },
        {
            labelName: 'Midlane',
            value: '2',
        },
        {
            labelName: 'Offlane',
            value: '3',
        },
        {
            labelName: 'Support',
            value: '4',
        },
        {
            labelName: 'Full Support',
            value: '5',
        },
    ]
    const validateScheme = yup.object({
        nickname: yup.string().required().max(25),
        mmr: yup.number().moreThan(-1).lessThan(100000).required().nullable().integer().transform((value) => isNaN(value) ? null : value),
        roles: yup.array().of(yup.number().min(1).max(5).required().nullable()).required()
    }).required()

    const {register, handleSubmit, reset, formState: {errors}} = useForm<InferType<typeof validateScheme>>({
        resolver: yupResolver(validateScheme),
        defaultValues: {
            nickname: undefined,
            mmr: null,
            roles: [],
        }
    })

    const errorMsg = useDisplayError(errors)

    const onSubmit: SubmitHandler<InferType<typeof validateScheme>> = (data) => {
        const newPlayer = new Player(data.nickname, data.mmr, data.roles)
        submitNewPlayer(newPlayer)
        reset()
    }

    function submitNewPlayer(player: Player): void {
        dispatch(addPlayer(player))
    }

    function autoFill() {
        for (let i = players.length; i < 10; i++) {
            submitNewPlayer(getRandomPlayer(i))
        }
    }

    return (
        <ModalWindow isModalActive={players.length < 10}>
            <form className={classes.playerForm} onSubmit={handleSubmit(onSubmit)}>
                <div className={classes.playerFormNickname}>
                    <label className={classes.formLabel} htmlFor='nickname'><TextPopup
                        content={'Required field'}>Nickname*</TextPopup></label>
                    <FormInput {...register('nickname')} autoComplete={'off'} id='nickname'/>
                </div>
                <div className={classes.playerFormRoles}>
                    <label className={classes.formLabel}>Preferred Role</label>
                    {prefferedRoleList.map(role =>
                        <FormCheckbox labelId={role.labelName} value={role.value} {...register('roles')}>
                            <RoleIcon roleNumber={+role.value}/> {role.labelName}
                        </FormCheckbox>
                    )}
                </div>
                <div className={classes.playerFormMMR}>
                    <label className={classes.formLabel} htmlFor='mmr'>MMR</label>
                    <FormInput {...register('mmr')} autoComplete={'off'} id='mmr'/>
                </div>
                <BigButton type='submit'>Create Player</BigButton>
                <div className={classes.formError}>{errorMsg}</div>
            </form>
            <div className={classes.formControl}>
                <div onClick={autoFill} className={classes.formControlButton}>Auto fill players</div>
                <div onClick={() => submitNewPlayer(getRandomPlayer(players.length))}
                     className={classes.formControlButton}>Add 1 random player
                </div>
            </div>
        </ModalWindow>
    );
};

export default PlayerForm;