export class Player {
    nickname: string;
    mmr: number | null;
    role: (number | null)[];

    constructor(nickname: string, mmr: number | null, role: (number | null)[]) {
        this.nickname = nickname;
        this.mmr = mmr;
        this.role = role;
    }
}