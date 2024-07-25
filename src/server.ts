import { strictEnv } from './strict-env'
import express from 'express'
import cors from 'cors'

const app = express()

const corsOptions = {
  origin: strictEnv.CLIENT_URL,
  optionsSuccessStatus: 204,
  methods: 'GET, POST',
}
app.use(cors(corsOptions))

app.get('/', (req, res) => {
  res.json({ message: 'OK' })
})

app.listen(strictEnv.PORT, () => {
  console.log(`Server listening at http://localhost:${strictEnv.PORT}`)
})
