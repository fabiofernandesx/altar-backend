import express from 'express'
import { GenerateRandomLettersArray } from '../letters-functions'
import { strictEnv } from '../strict-env'
import { CodeGeneration } from '../code-generation'

export const GridNCode = express.Router()
GridNCode.get('/:bias?', (req, res) => {
  const array = GenerateRandomLettersArray(strictEnv.ARRAY_SIZE, strictEnv.BIAS_WEIGHT, req.params.bias)
  const seconds = new Date().getSeconds()
  const code = CodeGeneration(array, seconds)
  res.json({ array: array, code: code })
})
