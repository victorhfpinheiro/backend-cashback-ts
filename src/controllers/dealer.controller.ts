import { Request, Response } from 'express'

class DealerController {
  async create (req: Request, res: Response) {
    return res.status(200).send()
  }
}

export default new DealerController()
