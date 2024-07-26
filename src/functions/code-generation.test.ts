import { CodeGeneration, getLettersFromCoords, ReduceDigitsUntilSingleDigit } from './code-generation'

describe('Code Generation Functions', () => {
  describe('Find the correct letters giving an array and seconds', () => {
    // It sounds crazy... here are the rules:
    // 1. Get the 2 digit seconds from the system clock, like so: 12:40:36
    // 2. Get the matching grid cell characters for the positions [3,6] and [6,3], like so: “v” and “c”.
    it('should return (I and F) as selected letters of the provided array and seconds number', () => {
      //splitting for readability
      const array = 'MWFWRFJPHETPJXDNFFFZMZUEMCYRFALPXSIHIFWEYMHNTOOCDFQUBFFCIRFYYNGFKQBFVKUNTXKFOPLNFLMFPQIIJXFMJFWRHFFH'.split('')
      const seconds = 36
      expect(getLettersFromCoords(array, seconds)).toBe('IF')
    })
  })
  describe('Reduce numbers bigger than 9', () => {
    // Rule:
    // If the count is larger than 9, divide the count by the lowest integer possible
    // in order to get a value lower or equal to 9.
    // *** It's not in the rules, but I'm assuming we are disconsidering the decimal part of the result number
    it('should return 6 for a number 20 (divided by 3)', () => {
      expect(ReduceDigitsUntilSingleDigit(20)).toBe(6)
    })
    it('should return 9 for a number 99 (divided by 10)', () => {
      expect(ReduceDigitsUntilSingleDigit(99)).toBe(9)
    })
    it('should return 9 for a number 37 (divided by 4)', () => {
      expect(ReduceDigitsUntilSingleDigit(37)).toBe(9)
    })

    it('should NOT reduce a number smaller than 10', () => {
      expect(ReduceDigitsUntilSingleDigit(9)).toBe(9)
    })
  })
  describe('Code Generation', () => {
    it('should return 56 as the result number', () => {
      const array = 'MWFWRFJPHETPJXDNFFFZMZUEMCYRFALPXSIHIFWEYMHNTOOCDFQUBFFCIRFYYNGFKQBFVKUNTXKFOPLNFLMFPQIIJXFMJFWRHFFH'.split('')
      const seconds = 36
      // Explanation: We already know that the letters are I and F are the result from the coordinates [3,6] and [6,3]
      // Letter I has 5 instances in the array
      // Letter F has 20 instances in the array -> must be 6 after reduction
      // So the code must be 56
      expect(CodeGeneration(array, seconds)).toBe(56)
    })
  })
})
