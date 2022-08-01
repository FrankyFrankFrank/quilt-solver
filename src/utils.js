export const generateSquares = () => {
    const squares = []
    for (let i = 0; i < 256; i++) {
        squares.push(i * i)
    }
    return squares
}