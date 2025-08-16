import dotaHeroes from '../../dotaHeroes.json'

export class SynergyData {
    private _data: number[]

    constructor() {
       this._data = []
    }

    createData() {
        for (let i = 0; i < dotaHeroes.length; i++) {
            this._data.push(0)
        }
    }
    postSynergy(heroId:number,synergyNumber:number) {
        Math.round(this._data[heroId] += synergyNumber)
    }

    getSynergy(heroId:number) {
        return this._data[heroId]
    }

}