import { Request, Response, RequestHandler } from "express"

import { Phrase } from "../models/Phrase"

export const ping: RequestHandler = (req, res) => {
  res.status(200).json({
    error: false,
    pong: true,
  })
}

export const random: RequestHandler = (req, res) => {
  const randomNumber = Math.floor(Math.random() * 10)
  res.status(200).json({
    error: false,
    number: randomNumber,
  })
}

export const name: RequestHandler = (req, res) => {
  const name: string = req.params.name
  res.status(200).json({
    error: false,
    name,
  })
}

export const createPhrase = async (req: Request, res: Response) => {
  const { author, text } = req.body

  await Phrase.create({ author, text })
    .then((data) => {
      res.status(200).json({
        error: false,
        data,
      })
    })
    .catch((error) => {
      console.log(error)
    })
}
