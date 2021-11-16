import { Router } from "express"

export const router = Router()

router.get("/ping", (req, res) => {
  res.status(200).json({
    error: false,
    pong: true,
  })
})

router.get("/random", (req, res) => {
  const randomNumber = Math.floor(Math.random() * 10)
  res.status(200).json({
    error: false,
    number: randomNumber,
  })
})

router.get("/name/:name", (req, res) => {
  const name: string = req.params.name
  res.status(200).json({
    error: false,
    name,
  })
})
