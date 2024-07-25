import express from 'express'

export const HealthCheck = express.Router()
HealthCheck.get('/', (_, res) => {
  res.json({ message: 'OK', timeStamp: new Date().toISOString() })
})
