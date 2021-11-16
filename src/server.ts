import express, { Request, Response } from "express"
import path from "path"
import dotenv from "dotenv"
import cors from "cors"

import { router as apiRoutes } from "./routes/api"

dotenv.config()

const server = express()

server.use(cors())
server.use(express.json())

server.use(express.static(path.join(__dirname, "../public")))
server.use(express.urlencoded({ extended: true }))

server.use("/api", apiRoutes)

server.use((req: Request, res: Response) => {
  res.status(404).json({
    error: true,
    msg: "Endpoint não encontrado.",
  })
})

server.listen(process.env.PORT || 3000, () => {
  console.log("Server running on port: " + process.env.PORT)
})