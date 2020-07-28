import { Request, Response } from 'express'
import AuthUtils from '@utils/auth.utils'
import DealerService from '@services/dealer.service'

class DealerController {
  async create (req: Request, res: Response): Promise<Response> {
    const { name, email, documentNumber, password } = req.body

    const dealer = await DealerService.create(name, email, documentNumber, password)

    const token = await AuthUtils.generateToken({ dealerId: dealer._id })

    return res.status(201).json({
      success: true,
      dealer,
      token
    })
  }
}

export default new DealerController()
