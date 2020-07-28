import { Request, Response } from 'express'
import Dealer from '@schemas/dealer.schema'
import authUtils from '@utils/auth.utils'

class DealerController {
  async create (req: Request, res: Response) {
    const { name, email, documentNumber, password } = req.body

    const dealerExists = await Dealer.findOne({ documentNumber })

    if (dealerExists) {
      return res.status(400).send({ success: false, message: 'Revendedor já cadastrado no sistema.' })
    }

    const dealer = await Dealer.create({ name, email, documentNumber, password })

    if (!dealer) {
      return res.status(500).json({ success: false, message: 'Ops! Algo deu errado, tente novamente mais tarde!' })
    }

    dealer.password = undefined
    const token = await authUtils.generateToken({ documentNumber: dealer.documentNumber })

    return res.status(201).json({
      success: true,
      dealer,
      token
    })
  }
}

export default new DealerController()
