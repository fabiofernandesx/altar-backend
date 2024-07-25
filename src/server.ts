import { strictEnv } from './strict-env'
import express from 'express'
import cors from 'cors'
import { HealthCheck, GridNCode, Payments } from './routes'

const app = express()

const corsOptions = {
  origin: strictEnv.CLIENT_URL,
  optionsSuccessStatus: 204,
  methods: 'GET, POST',
}
app.use(cors(corsOptions))
app.use(express.json())

app.use('/', HealthCheck)
app.use('/gridncode', GridNCode)
app.use('/payments', Payments)

app.listen(strictEnv.PORT, () => {
  console.log(`Server listening at http://localhost:${strictEnv.PORT}`)
})
