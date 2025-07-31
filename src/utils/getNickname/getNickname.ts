
export function getNickname(nickname: string):[string,boolean] {

    let maxNicknameLength = 10
    let newNickname = nickname

    if (nickname.length > maxNicknameLength) {
        for (let i = 0; i < nickname.length; i++) {
            newNickname = newNickname.slice(0, -1)
            if (newNickname.length < maxNicknameLength-1) {
                break;
            }
        }
        return [newNickname + '.' + '.' + '.', true]
    }
    return [newNickname, false];
}

