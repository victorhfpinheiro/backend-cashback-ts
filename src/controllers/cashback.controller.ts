import { Response, Request } from 'express'

class CashBackController {
  async total (req: Request, res: Response) {
    return res.status(200).send()
  }
}

export default new CashBackController()
