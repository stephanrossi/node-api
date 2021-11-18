import { Router } from "express"
import * as apiController from "../controllers/apiController"

export const router = Router()

router.get("/ping", apiController.ping)

router.get("/random", apiController.random)

router.get("/name/:name", apiController.name)

router.get("/frase/random", apiController.randomPhrase)
router.get("/frase/:id", apiController.getPhrase)
router.get("/frases", apiController.listPhrases)

router.put("/frase/:id", apiController.updatePhrase)

router.post("/frases", apiController.createPhrase)

router.delete("/frase/:id", apiController.deletePhrase)
