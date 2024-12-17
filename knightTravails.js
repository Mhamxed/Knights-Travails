class vertex {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    validPosition() {
        let valid = true
        if (this.x < 0 || this.x > 7 || this.y < 0 || this.y > 7) {
            valid = false
        } 
        return valid
    }
}

function knightNextMoves([x, y]) {
    let moves = []
    const One = new vertex(x + 1, y + 2)
    if (One.validPosition()) {
        moves.push([One.x, One.y])
    }
    const Two = new vertex(x + 1, y - 2)
    if (Two.validPosition()) {
        moves.push([Two.x, Two.y])
    }
    const Three = new vertex(x - 1, y + 2)
    if (Three.validPosition()) {
        moves.push([Three.x, Three.y])
    }
    const Four = new vertex(x - 1, y - 2)
    if (Four.validPosition()) {
        moves.push([Four.x, Four.y])
    }
    const Five = new vertex(x + 2, y + 1)
    if (Five.validPosition()) {
        moves.push([Five.x, Five.y])
    }
    const Six = new vertex(x + 2 , y - 1)
    if (Six.validPosition()) {
        moves.push([Six.x, Six.y])
    }
    const Seven = new vertex(x - 2, y - 1)
    if (Seven.validPosition()) {
        moves.push([Seven.x, Seven.y])
    }
    const Eight = new vertex(x - 2, y + 1)
    if (Eight.validPosition()) {
        moves.push([Eight.x, Eight.y])
    }
    return moves
}

function knightMovesMap() {
    let map = new Map()
    for (let i = 0; i < 7; i++) {
        for (let j = 0; i < 7; j++) {
            const square = [i, j]
            const validMoves = knightNextMoves(square)
            map.set(square, validMoves)
        }
    }
}

function knightMoves([start_x, start_y], [end_x, end_y]) {
    

}