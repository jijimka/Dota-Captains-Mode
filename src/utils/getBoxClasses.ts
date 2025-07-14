export function getBoxClasses(boxSide: 'radiant' | 'dire', boxNumber: number, turn: number) {
    const boxClasses = [
        'pick-box',
    ]

    if (boxSide === 'radiant') {
        if (boxNumber === turn) {
            boxClasses.push('pick-box__active-radiant')
        }
        if (turn > boxNumber) {
            boxClasses.push('pick-box__passed-radiant')
        }
        boxClasses.push('pick-box__radiant')
    } else {
        if (boxNumber === turn) {
            boxClasses.push('pick-box__active-dire')
        }
        if (turn > boxNumber) {
            boxClasses.push('pick-box__passed-dire')
        }
        boxClasses.push('pick-box__dire')
    }

    return boxClasses
}