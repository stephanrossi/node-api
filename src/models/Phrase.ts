import { Model, DataTypes } from "sequelize"
import { sequelize } from "../config/postgres"

export interface PhraseInstance extends Model {
  id: number
  author: string
  text: string
}

export const Phrase = sequelize.define<PhraseInstance>(
  "Phrase",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    author: {
      type: DataTypes.STRING,
    },
    text: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "phrases",
    timestamps: false,
  }
)
