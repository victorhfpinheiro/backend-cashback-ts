import { Request, Response } from 'express'
import AuthUtils from '@utils/auth.utils'
import AuthenticateService from '@services/authenticate.service'

class AuthenticateController {
  async authenticate (req: Request, res: Response) {
    const { documentNumber, password } = req.body

    const dealer = await AuthenticateService.authenticate(documentNumber, password)

    const token = await AuthUtils.generateToken({ dealerId: dealer._id })

    res.send({
      sucesso: true,
      dealer,
      token
    })
  }
}

export default new AuthenticateController()
