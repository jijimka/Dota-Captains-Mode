export interface IHeroes {
    id: number
    name: string
    name_loc: string
    name_english_loc: string
    primary_attr: number
    complexity: number
    image: string
    attribute_img: string
}

export interface IPickedHero {
    hero: IHeroes;
    pick: number;
}