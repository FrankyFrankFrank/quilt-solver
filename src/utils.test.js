import {describe, expect, it} from 'vitest'
import { generateSquares } from './utils'

describe('utils', () => {
    it('returns 256 squares', () => {
        const squares = generateSquares()
        expect(squares.length).toBe(256)
    })

    it.each([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
    ])('returns 16 squares on column %i', (column) => {
        const squares = generateSquares()
        const squaresOnColumn = squares.filter((square) => square.column === column)
        expect(squaresOnColumn.length).toBe(16)
    })

    it.each([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
    ])('returns 16 squares on row %i', (row) => {
        const squares = generateSquares()
        const squaresOnRow = squares.filter((square) => square.row === row)
        expect(squaresOnRow.length).toBe(16)
    })

    it.each([
        'red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'forestgreen'
    ])('returns fewer than 36 squares of each color', (color) => {
        const squares = generateSquares()
        const squaresOfColor = squares.filter((square) => square.color === color)
        expect(squaresOfColor.length).toBeLessThan(36)
    })

    it('never places two squares of the same color next to each other', () => {
        const squares = generateSquares()
        squares.forEach((square, index) => {
            if (index === 0) return
            expect(square.color).not.toBe(squares[index - 1].color)
        })
    })

    it('never places two squares of the same color on top of each other', () => {
        const squares = generateSquares()
        squares.forEach((square, index) => {
            if (index < 16) return
            expect(square.color).not.toBe(squares[index - 16].color)
        })
    })

    it.each([
        'red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'forestgreen'
    ])('puts two %s per row', (color) => {
        const rows = [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
        ]
        const squares = generateSquares()
        rows.forEach((row) => {
            const squaresOnRow = squares.filter((square) => square.row === row)
            const squaresOfColorOnRow = squaresOnRow.filter((square) => square.color === color)
            expect(squaresOfColorOnRow.length).toBe(2)

        })

    })
})