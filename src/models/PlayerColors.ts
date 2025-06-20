

export class PlayerColors {
    public static Blue = '#3375FF'
    public static Aquamarine = '#66FFBF'
    public static Purple = '#BF00BF'
    public static Yellow = '#F3F00B'
    public static Orange = '#FF6B00'
    public static Pink = '#FE86C2'
    public static Olive = '#A1B447'
    public static SkyBlue = '#65D9F7'
    public static Green = '#008321'
    public static Brown = '#A46900'

    static getColors(side:'Radiant' | 'Dire'):string[] {
        const radiant = [this.Blue,this.Aquamarine,this.Purple,this.Yellow,this.Orange,]
        const dire = [this.Pink,this.Olive,this.SkyBlue,this.Green,this.Brown]
        return side === 'Radiant' ? radiant : dire
    }
}