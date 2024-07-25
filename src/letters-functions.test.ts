import {
  GenerateRandomLetter,
  GenerateRandomLettersArray,
  GenerateValidLettersString,
} from './letters-functions'

describe('Letters Functions', () => {
  describe('Generate a string of valid letters to be used on array calculations', () => {
    it('should return a string with A-Z letters when bias is not set', () => {
      expect(GenerateValidLettersString()).toBe('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
    })
    it('should return a string with A-Z letters without the bias letter when bias is set', () => {
      expect(GenerateValidLettersString('F')).toBe('ABCDEGHIJKLMNOPQRSTUVWXYZ')
    })
  })
  describe('Generate a random letter', () => {
    it('should return a random letter when bias is not set', () => {
      expect(GenerateRandomLetter()).toMatch(/[A-Z]/)
    })
    it('should return a random letter without the bias letter when bias is set', () => {
      expect(GenerateRandomLetter('F')).toMatch(/[A-Z]/)
      expect(GenerateRandomLetter('F')).not.toBe('F')
    })
  })
  describe('Generate a random letters array', () => {
    it('should return an array with 100 random letters when bias is not set', () => {
      expect(GenerateRandomLettersArray(100, 0)).toHaveLength(100)
    })
    it('should return an array with 100 random letters without the bias letter when bias is set', () => {
      expect(GenerateRandomLettersArray(100, 20, 'F')).toHaveLength(100)
    })
    it('should return a fixed amount of bias letter', () => {
      const resultArray = GenerateRandomLettersArray(100, 20, 'F')
      const biasCount = resultArray.filter((letter) => letter === 'F').length
      expect(biasCount).toBe(20)
    })
  })
})
