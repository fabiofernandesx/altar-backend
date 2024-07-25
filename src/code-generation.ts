export const getLettersFromCoords = (lettersArray: string[], seconds: number): string => {
  const firstCoord = seconds
  const secondCoord = parseInt(seconds.toString().split('').reverse().join(''))
  return `${lettersArray[firstCoord]}${lettersArray[secondCoord]}`
}
export const CodeGeneration = (lettersArray: string[], seconds: number): number => {
  const letters = getLettersFromCoords(lettersArray, seconds)
  const firstLetterCount = lettersArray.filter((letter) => letter === letters[0]).length
  const secondLetterCount = lettersArray.filter((letter) => letter === letters[1]).length
  const firstLetterCountAfterReduction = ReduceDigitsUntilSingleDigit(firstLetterCount).toString()
  const secondLetterCountAfterReduction = ReduceDigitsUntilSingleDigit(secondLetterCount).toString()

  return parseInt(firstLetterCountAfterReduction + secondLetterCountAfterReduction)
}

export const ReduceDigitsUntilSingleDigit = (num: number): number => {
  if (num < 10) return num
  let count = 2 // lowest integer possible in order to get a value lower or equal to 9
  let result = 0
  for (let i = 2; i < 11; i++) {
    if (num / i < 10) {
      result = num / i
      break
    }
  }
  return Math.floor(result)
}
