import { Response, Request } from 'express'
import CashbackService from '@services/cashback.service'

class CashBackController {
  async cashback (req: Request, res: Response) {
    const cashBack = await CashbackService.cashback()

    return res.status(200).json({
      success: true,
      cashBackValue: cashBack
    })
  }
}

export default new CashBackController()
