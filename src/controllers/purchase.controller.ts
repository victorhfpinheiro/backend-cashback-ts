import { Request, Response } from 'express'
import PurchaseService from '@services/purchase.service'

class PurchaseController {
  async index (req: Request, res: Response) {
    const purchases = await PurchaseService.index(req.dealerId)

    return res.status(200).json({
      success: true,
      purchases
    })
  }

  async create (req: Request, res: Response) {
    const { code, date, value } = req.body

    const purchase = await PurchaseService.create(req.dealerId, code, date, value)

    return res.status(201).json({
      success: true,
      purchase
    })
  }
}

export default new PurchaseController()
