import {FC} from 'react';
import {Player} from "../../models/Player.ts";
import RoleIcon from "../UI/RoleIcon/RoleIcon.tsx";

interface RoleListProps {
    player: Player;
}

const RoleList: FC<RoleListProps> = ({player}) => {
    return (
        <div className='player-card__role-list'>
            {player.role.map(roleNumber =>
                <RoleIcon roleNumber={roleNumber}/>
            )}
        </div>
    );
};

export default RoleList;