export const generateSquares = () => {
    const squares = []
    for (let i = 0; i < 256; i++) {
        squares.push({
            column: i % 16,
            row: Math.floor(i / 16),
        })
    }
    return squares
}