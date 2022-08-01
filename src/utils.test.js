import {describe, expect, it} from 'vitest'
import { generateSquares } from './utils'

describe('utils', () => {
    it('returns 256 squares', () => {
        const squares = generateSquares()
        expect(squares.length).toBe(256)
    })

    it('returns 16 squares on column 0', () => {
        const squares = generateSquares()
        const squaresOnColumn1 = squares.filter((square) => square.column === 0)
        expect(squaresOnColumn1.length).toBe(16)
    })

    it('returns 16 squares on row 0', () => {
        const squares = generateSquares()
        const squaresOnRow1 = squares.filter((square) => square.row === 0)
        expect(squaresOnRow1.length).toBe(16)
    })
})