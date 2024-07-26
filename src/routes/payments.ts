import express from 'express'
import { prisma } from '../lib/prisma'

export const Payments = express.Router()

Payments.get('/', async (req, res) => {
  const result = await prisma.payment.findMany()
  res.json({ result })
})
