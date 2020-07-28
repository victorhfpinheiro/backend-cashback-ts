import { Request, Response } from 'express'
import Dealer from '@schemas/dealer.schema'
import AuthUtils from '@utils/auth.utils'
import * as bcrypt from 'bcrypt'

class AuthenticateController {
  async authenticate (req: Request, res: Response): Promise<Response> {
    const { documentNumber, password } = req.body

    const dealer = await Dealer.findOne({ documentNumber }).select('+password')

    if (!dealer) {
      return res.status(400).send({ success: false, message: 'Dealer not found!' })
    }

    if (!await bcrypt.compare(password, dealer.password)) {
      return res.status(400).send({ success: false, message: 'Password invalid!' })
    }

    dealer.password = undefined

    const token = await AuthUtils.generateToken({ dealerId: dealer._id })

    res.send({
      sucesso: true,
      dealer,
      token
    })
  }
}

export default new AuthenticateController()
