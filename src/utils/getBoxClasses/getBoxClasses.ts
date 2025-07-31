export function getBoxClasses(boxSide: 'radiant' | 'dire', boxNumber: number, turn: number) {
    const boxClasses = [
        'pick-box',
    ]
    switch (boxSide) {

        case 'radiant':
            boxClasses.push('pick-box__radiant')
            if (boxNumber === turn) {
                boxClasses.push('pick-box__active-radiant')
            }
            if (turn > boxNumber) {
                boxClasses.push('pick-box__passed-radiant')
            }
            break;

        case "dire":
            boxClasses.push('pick-box__dire')
            if (boxNumber === turn) {
                boxClasses.push('pick-box__active-dire')
            }
            if (turn > boxNumber) {
                boxClasses.push('pick-box__passed-dire')
            }
            break;

    }
    return boxClasses
}