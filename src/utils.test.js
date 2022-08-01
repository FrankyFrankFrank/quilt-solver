import {describe, expect, it} from 'vitest'
import { generateSquares } from './utils'

describe('utils', () => {
    it('returns 256 squares', () => {
        const squares = generateSquares()
        expect(squares.length).toBe(256)
    })
})