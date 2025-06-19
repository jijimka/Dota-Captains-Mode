export class Player {
    nickname:string;
    mmr:number | null;
    role:number[];
    constructor(nickname:string, mmr:number | null, role:number[]) {
        this.nickname = nickname;
        this.mmr = mmr;
        this.role = role;
    }
}