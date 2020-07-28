import { Document, Schema, model } from 'mongoose'
import { NextFunction } from 'express'
import { hash } from 'bcrypt'

export interface IDealerInterface extends Document {
  name: string,
  email: string,
  documentNumber: string,
  password: string
}

const DealerSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      trim: true,
      required: true
    },
    documentNumber: {
      type: String,
      unique: true,
      trim: true,
      required: true
    },
    password: {
      type: String,
      required: true,
      select: false
    }
  },
  {
    timestamps: true
  }
)

DealerSchema.pre<IDealerInterface>('save', async function (next: NextFunction) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const self = this
  self.password = await hash(self.password, 12)
  next()
})

export default model<IDealerInterface>('Dealer', DealerSchema)
