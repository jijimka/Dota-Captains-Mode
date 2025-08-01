import carryImg from '../images/4 - rL1ZwZ4.png'
import fullSupImg from '../images/1 - TGv7onk.png'
import semiSupImg from '../images/5 - NkAmIjB.png'
import midImg from '../images/2 - 7oAbbDo.png'
import hardImg from '../images/3 - ThXJQ0n.png'

export class RoleIcons {
    public static CARRY = carryImg
    public static MID = midImg
    public static HARD = hardImg
    public static SEMISUP = semiSupImg
    public static FULLSUP = fullSupImg

    static getRoleIcons(number: number) {
        const roles = [RoleIcons.CARRY, RoleIcons.MID, RoleIcons.HARD, RoleIcons.SEMISUP, RoleIcons.FULLSUP]
        return roles[number]
    }
}
