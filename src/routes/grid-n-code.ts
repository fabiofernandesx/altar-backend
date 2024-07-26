import express from 'express'
import { GenerateRandomLettersArray } from '../functions/letters-functions'
import { strictEnv } from '../strict-env'
import { CodeGeneration } from '../functions/code-generation'
import { GenerateData } from '../functions/generate-data'

export const GridNCode = express.Router()
GridNCode.get('/:bias?', (req, res) => {
  res.json({})
})
