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
        squares[i].color = getRandomColor(colors)
    }
    
    return squares
}

const getRandomColor = (colors) => {
    const randomIndex = Math.floor(Math.random() * colors.length)
    return colors[randomIndex]
}
