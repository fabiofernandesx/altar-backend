import express from 'express'
import { z, ZodError } from 'zod'
import { prisma } from '../lib/prisma'

export const Payments = express.Router()

Payments.get('/', async (req, res) => {
  const result = await prisma.payment.findMany()
  res.json({ result })
})
Payments.post('/', async (req, res) => {
  try {
    const bodySchema = z.object({ code: z.coerce.number(), name: z.string(), amount: z.coerce.number(), grid: z.string().min(100) })
    bodySchema.parse(req.body)
    const result = await prisma.payment.create({ data: { code: req.body.code, name: req.body.name, amount: req.body.amount, grid: req.body.grid } })    
    res.json({ result })
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(400).json({
        error: error.flatten().fieldErrors,
      })
    } else {
      res.status(500).json({ error: error })
    }
  }
})
