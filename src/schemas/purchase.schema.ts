import { Document, Schema, model } from 'mongoose'
import { NextFunction } from 'express'
import { IDealerInterface } from './dealer.schema'
import { StatusPurchase } from '@enums/status.purchase'

export interface IPurchaseInterface extends Document {
  code: number,
  value: number,
  date: Date,
  dealer: IDealerInterface,
  status?: StatusPurchase,
  cashBackPercent?: number,
  cashBackValue?: number,
}

const PurchaseSchema = new Schema(
  {
    code: {
      type: Number,
      minlength: 1,
      maxlength: 6,
      trim: true,
      required: true
    },
    value: {
      type: Number,
      trim: true,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    dealer: {
      type: Schema.Types.ObjectId,
      ref: 'Dealer'
    },
    cashBackPercent: {
      type: Number
    },
    cashBackValue: {
      type: Number
    },
    status: {
      type: String,
      enum: Object.values(StatusPurchase),
      default: StatusPurchase.EM_VALIDACAO
    }
  },
  {
    timestamps: true
  }
)

PurchaseSchema.pre<IPurchaseInterface>('save', async function (next: NextFunction) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const self = this

  if (self.value < 1000) {
    self.cashBackPercent = 10
    self.cashBackValue = self.value * 0.10
  } else if (self.value >= 1000 && self.value <= 1500) {
    self.cashBackPercent = 15
    self.cashBackValue = self.value * 0.15
  } else {
    self.cashBackPercent = 20
    self.cashBackValue = self.value * 0.20
  }

  if (self.dealer.documentNumber === '15350946056') {
    self.status = StatusPurchase.APROVADO
  }
  next()
})

export default model<IPurchaseInterface>('Purchase', PurchaseSchema)
