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
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const square = [i, j]
            const validMoves = knightNextMoves(square)
            map.set(`${square}`, validMoves)
        }
    }
    return map
}

function knightMoves(start, end) {
    if (start[0] < 0 || start[1] > 7) {
        return 'invaide stating point!'
    }
    if (end[0] < 0 || end[1] > 7) {
        return 'invaide target point!'
    }
    let q = [{node: start, path: []}]
    let seen = new Set()
    const AdjMap = knightMovesMap()
    while (q.length > 0) {
        const {node, path} = q.shift()
        seen.add(node)
        path.push(node)
        const nei_nodes = AdjMap.get(`${node}`)
        for (let nei_node of nei_nodes) {
            if (!seen.has(nei_node)) {
                const n = {node: nei_node, path: [...path]}
                q.push(n)
            }
        }
        if (node[0] === end[0] && node[1] === end[1]) {
            return path
        }
    }
}

function printResult(array) {
    console.log(`You made it in ${array.length - 1} moves!  Here's your path:`)
    array.forEach(e => {
        console.log(e)
    })
}

printResult(knightMoves([5,0],[3,6])) 
/*You made it in 4 moves!  Here's your path:
[ 5, 0 ]
[ 6, 2 ]
[ 7, 4 ]
[ 5, 5 ]
[ 3, 6 ]*/

printResult(knightMoves([3,0],[7,6]))
/*You made it in 4 moves!  Here's your path:
[ 3, 0 ]
[ 4, 2 ]
[ 3, 4 ]
[ 5, 5 ]
[ 7, 6 ]*/

printResult(knightMoves([4,1],[2,6]))
/*You made it in 3 moves!  Here's your path:
[ 4, 1 ]
[ 5, 3 ]
[ 4, 5 ]
[ 2, 6 ]*/


