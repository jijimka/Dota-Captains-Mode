export function getNickname(nickname: string):[string,boolean] {
    let newNickname = nickname
    if (nickname.length > 10) {
        for (let i = 0; i < nickname.length; i++) {
            newNickname = newNickname.slice(0, -1)
            if (newNickname.length < 9) {
                break;
            }
        }
        return [newNickname + '.' + '.' + '.', true]
    }
    return [newNickname, false];
}

