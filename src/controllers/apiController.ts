import { Request, Response, RequestHandler } from "express"
import { Sequelize } from "sequelize"

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
  const { author, txt } = req.body

  await Phrase.create({ author, txt })
    .then((data) => {
      res.status(200).json({
        error: false,
        data,
      })
    })
    .catch((error) => {
      res.json({
        error: true,
        data: error,
      })
    })
}

export const listPhrases: RequestHandler = async (req, res) => {
  const list = await Phrase.findAll()

  res.status(200).json({
    error: false,
    data: list,
  })
}

export const getPhrase: RequestHandler = async (req, res) => {
  const { id } = req.params

  const phrase = await Phrase.findByPk(id)

  if (!phrase) {
    res.status(200).json({
      error: true,
      msg: "Frase não encontrada.",
    })
  }

  res.status(200).json({
    error: false,
    data: phrase,
  })
}

export const updatePhrase: RequestHandler = async (req, res) => {
  const { id } = req.params
  const { author, text } = req.body

  const phrase = await Phrase.findByPk(id)

  if (!phrase) {
    res.status(200).json({
      error: true,
      msg: "Frase não encontrada.",
    })
  }

  if (!author) {
    res.status(200).json({
      error: true,
      msg: "Autor não pode ser em branco.",
    })
  }

  if (!text) {
    res.status(200).json({
      error: true,
      msg: "Frase não pode ser em branco.",
    })
  }

  phrase?.set({
    author,
    text,
  })

  await phrase?.save()

  res.status(200).json({
    error: false,
    data: phrase,
  })
}

export const deletePhrase: RequestHandler = async (req, res) => {
  const { id } = req.params

  const phrase = await Phrase.findByPk(id)

  if (!phrase) {
    res.status(200).json({
      error: true,
      msg: "Frase não encontrada.",
    })
  }

  phrase?.destroy()

  res.status(200).json({
    error: false,
    data: "Frase apagada.",
  })
}

export const randomPhrase: RequestHandler = async (req, res) => {
  const phrase = await Phrase.findOne({
    order: [Sequelize.fn("RANDOM")],
  })

  if (!phrase) {
    res.status(200).json({
      error: true,
      msg: "Não há frases cadastradas.",
    })
  }

  res.status(200).json({
    error: false,
    data: phrase,
  })
}
