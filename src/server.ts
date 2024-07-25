import { strictEnv } from './strict-env'
import { GenerateRandomLettersArray } from './letters-functions'
import { CodeGeneration } from './code-generation'
import express from 'express'
import cors from 'cors'

const app = express()

const corsOptions = {
  origin: strictEnv.CLIENT_URL,
  optionsSuccessStatus: 204,
  methods: 'GET, POST',
}
app.use(cors(corsOptions))

app.get('/:bias?', (req, res) => {
  const array = GenerateRandomLettersArray(strictEnv.ARRAY_SIZE, strictEnv.BIAS_WEIGHT, req.params.bias)
  const seconds = new Date().getSeconds()
  const code = CodeGeneration(array, seconds)
  res.json({ array: array, code: code })
})

app.listen(strictEnv.PORT, () => {
  console.log(`Server listening at http://localhost:${strictEnv.PORT}`)
})
