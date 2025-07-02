

export function getNickname(nickname:string) {
    let answer = nickname
    if (nickname.length > 10) {
        for (let i = 0; i < nickname.length; i++) {
            answer = answer.slice(0,-1)
            if (answer.length < 11) {
                break;
            }
        }
    }
    return answer + '.' + '.' + '.'
}

