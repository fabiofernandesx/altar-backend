import { strictEnv } from '../strict-env'

export const GenerateValidLettersString = (bias?: string): string => {
  let validLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  if (bias) {
    validLetters = validLetters
      .split('')
      .filter((letter) => letter !== bias)
      .join('')
  }
  return validLetters
}

export const GenerateRandomLetter = (bias?: string): string => {
  const validLetters = GenerateValidLettersString(bias)
  return validLetters[Math.floor(Math.random() * validLetters.length)]
}

export const GenerateRandomLettersArray = (
  arraySize: number,
  biasWeight: number,
  bias?: string
): string[] => {
  let biasArray: string[] = []
  let arrayLength = arraySize
  if (bias) {
    biasArray = Array(20).fill(bias)
    arrayLength = arraySize - biasWeight
  }
  const randomLetters = Array.from({ length: arrayLength }, () =>
    GenerateRandomLetter(bias)
  )
  const allLetters = [...randomLetters, ...biasArray]

  // Not the most performatic choice, but elegant way to shuffle ;-)
  return allLetters
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
}
