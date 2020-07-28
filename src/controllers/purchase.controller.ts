import { Request, Response } from 'express'
import Purchase from '@schemas/purchase.schema'
import Dealer from '@schemas/dealer.schema'
import moment from 'moment'

class PurchaseController {
  async index (req: Request, res: Response) {
    const dealer = await Dealer.findById(req.dealerId)
    const purchases = await Purchase.find({ dealer: dealer })

    return res.status(200).json({
      success: true,
      purchases
    })
  }

  async create (req: Request, res: Response) {
    const { code, date, value } = req.body

    const dealer = await Dealer.findById(req.dealerId)

    const dtFormatted: Date = moment(date, 'DD/MM/YYYY', true).toDate()

    const purchase = await Purchase.create({ code, date: dtFormatted, value, dealer })

    return res.status(200).json({
      success: true,
      purchase
    })
  }
}

export default new PurchaseController()
