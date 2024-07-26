import { strictEnv } from '../strict-env'
import { CodeGeneration } from './code-generation'
import { GenerateRandomLettersArray } from './letters-functions'

export const GenerateData = (bias: string) => {
  const array = GenerateRandomLettersArray(strictEnv.ARRAY_SIZE, strictEnv.BIAS_WEIGHT, bias)
  const seconds = new Date().getSeconds()
  const code = CodeGeneration(array, seconds)
  return { array: array, code: code, bias: bias }
}
