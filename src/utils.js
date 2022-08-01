export const generateSquares = () => {
    const squares = []
    const colors = [
        'red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'forestgreen'
    ]

    for (let i = 0; i < 256; i++) {
        const column = i % 16
        const row = Math.floor(i / 16)
        squares.push({
            column,
            row,
        })
        squares[i].color = getColorUnusedInRow(squares, row, colors)
    }
    
    return squares
}

const getColorUnusedInRow = (squares, row, colors) => {
    const squaresOnRow = squares.filter((square) => square.row === row)
    const colorsOnRow = squaresOnRow.map((square) => square.color)
    const colorsUnusedInRow = colors.filter((color) => !colorsOnRow.includes(color))
    return getRandomColor(colorsUnusedInRow)
}

const getRandomColor = (colors) => {
    const randomIndex = Math.floor(Math.random() * colors.length)
    return colors[randomIndex]
}
