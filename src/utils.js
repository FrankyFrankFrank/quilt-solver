export const generateSquares = () => {
    const squares = []
    const colors = [
        'red', 'lightgreen', 'blue', 'yellow', 'orange', 'purple', 'pink', 'darkgreen'
    ]

    for (let i = 0; i < 256; i++) {
        const column = i % 16
        const row = Math.floor(i / 16)
        squares.push({
            column,
            row,
        })
        squares[i].color = getColorUnusedInColumnOrRowFewerThanTwoTimes(squares, column, row, colors)
    }
    
    return squares
}

const getColorUnusedInColumnOrRowFewerThanTwoTimes = (squares, column, row, colors) => {
    const colorsUnusedInColumn = colors.filter((color) => {
        const squaresOfColorInColumn = squares.filter((square) => square.column === column && square.color === color)
        return squaresOfColorInColumn.length < 2
    })
    const colorsUnusedInRow = colorsUnusedInColumn.filter((color) => {
        const squaresOfColorInRow = squares.filter((square) => square.row === row && square.color === color)
        return squaresOfColorInRow.length < 2
    })

    const colorsNotImmediatelyAboveOrBelow = colorsUnusedInRow.filter((color) => {
        const squaresOfColorImmediatelyAbove = squares.filter((square) => square.column === column && square.row === row - 1 && square.color === color)
        const squaresOfColorImmediatelyBelow = squares.filter((square) => square.column === column && square.row === row + 1 && square.color === color)
        return squaresOfColorImmediatelyAbove.length === 0 && squaresOfColorImmediatelyBelow.length === 0
    })

    const colorsNotImmediatelyOnTheLeftOrRight = colorsNotImmediatelyAboveOrBelow.filter((color) => {
        const squaresOfColorImmediatelyOnTheLeft = squares.filter((square) => square.column === column - 1 && square.row === row && square.color === color)
        const squaresOfColorImmediatelyOnTheRight = squares.filter((square) => square.column === column + 1 && square.row === row && square.color === color)
        return squaresOfColorImmediatelyOnTheLeft.length === 0 && squaresOfColorImmediatelyOnTheRight.length === 0
    })

    const color = getColorUsed34OrFewerTimes(colorsNotImmediatelyOnTheLeftOrRight, squares)

    if (!color) {
        return getColorUsed34OrFewerTimes(colorsUnusedInColumn, squares)
    } 
    return color
}

const getColorUsed34OrFewerTimes = (colors, squares) => {
    const color = getRandomElementFromArray(colors)
    const squaresOfColor = squares.filter((square) => square.color === color)
    if (squaresOfColor.length <= 35) {
        return color
    } else {
        return getColorUsed34OrFewerTimes(colors, squares)
    }
}

const getRandomElementFromArray = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length)
    return array[randomIndex]
} 