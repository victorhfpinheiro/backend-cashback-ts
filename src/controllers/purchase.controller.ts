import { Request, Response } from 'express'

class PurchaseController {
  async index (req: Request, res: Response) {
    return res.status(200).send()
  }

  async create (req: Request, res: Response) {
    return res.status(201).send()
  }
}

export default new PurchaseController()
