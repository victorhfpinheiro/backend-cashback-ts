import { Request, Response } from 'express'
import Dealer from '@schemas/dealer.schema'
import AuthUtils from '@utils/auth.utils'

class DealerController {
  async create (req: Request, res: Response): Promise<Response> {
    const { name, email, documentNumber, password } = req.body

    const dealerExists = await Dealer.findOne({ documentNumber })

    if (dealerExists) {
      return res.status(400).send({ success: false, message: 'Dealer already registered!' })
    }

    const dealer = await Dealer.create({ name, email, documentNumber, password })

    if (!dealer) {
      return res.status(500).json({ success: false, message: 'Ops! Something went wrong, try again later!' })
    }

    dealer.password = undefined

    const token = await AuthUtils.generateToken({ dealerId: dealer._id })

    return res.status(201).json({
      success: true,
      dealer,
      token
    })
  }
}

export default new DealerController()
