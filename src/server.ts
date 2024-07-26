import { strictEnv } from './strict-env'
import express from 'express'
import cors from 'cors'
import http from 'http'
import { Server } from 'socket.io'
import { HealthCheck, GridNCode, Payments } from './routes'
import { GenerateData } from './functions/generate-data'
import { prisma } from './lib/prisma'

const app = express()
const server = http.createServer(app)
const corsOptions = {
  origin: strictEnv.CLIENT_URL,
  optionsSuccessStatus: 204,
  methods: 'GET, POST',
}
let bias = ''
let gridData = GenerateData(bias)
app.use(cors(corsOptions))
app.use(express.json())

app.use('/', HealthCheck)
app.use('/payments', Payments)

app.get('/gridncode', (_, res) => {
  res.json(gridData)
})

const io = new Server(server, {
  cors: corsOptions,
})

setInterval(() => {
  gridData = GenerateData(bias)
}, 2000)

io.on('connection', (socket) => {
  console.log(socket.id)
  socket.on('bias', (data) => {
    bias = data
    console.log(`Bias letter received: ${data}`)
  })
  socket.on('create-payment', async (data) => {
    console.log(data)
    await prisma.payment.create({ data: { code: data.code, name: data.name, amount: data.amount, grid: data.grid } })
    const paymentRecords = await prisma.payment.findMany()
    socket.broadcast.emit('payment-update', paymentRecords)
  })
  setInterval(() => {
    socket.emit('grid', gridData)
  }, 2000)
})

server.listen(strictEnv.PORT, () => {
  console.log(`Server listening at http://localhost:${strictEnv.PORT}`)
})
