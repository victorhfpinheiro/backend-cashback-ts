import { Response, Request } from 'express'
import axios from 'axios'

class CashBackController {
  async cashback (req: Request, res: Response) {
    const response = await axios.get(process.env.URL_API_CASHBACK, {
      headers: {
        token: process.env.TOKEN_HEADER_API_CASHBACK
      }
    })

    if (!response) {
      return res.status(500).json({ success: false, message: 'Ops! Something went wrong, try again later!' })
    }

    const cashback = response.data.body.credit

    return res.status(200).json({
      success: true,
      cashback
    })
  }
}

export default new CashBackController()
