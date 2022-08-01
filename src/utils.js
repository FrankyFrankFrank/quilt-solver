export const generateSquares = () => {
    const squares = []
    const colors = [
        'red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'forestgreen'
    ]

    for (let i = 0; i < 256; i++) {
        squares.push({
            column: i % 16,
            row: Math.floor(i / 16),
            color: colors[i % 8]
        })
    }
    
    return squares
}