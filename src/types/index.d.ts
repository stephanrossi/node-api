import { Phrase } from "../models/Phrase"

declare namespace Express {
  export interface Request {
    id: Phrase
  }
}
