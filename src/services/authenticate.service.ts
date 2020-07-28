import AppException from '@exceptions/app.exception'
import Props from '@errors/app.errors'
import Dealer from '@schemas/dealer.schema'
import * as bcrypt from 'bcrypt'

class AuthenticateService {
  async authenticate (documentNumber: string, password: string) {
    const dealer = await Dealer.findOne({ documentNumber }).select('+password')

    if (!dealer) {
      throw new AppException(Props[1002].HTTP_CODE, Props[1002].MESSAGE)
    }

    if (!await bcrypt.compare(password, dealer.password)) {
      throw new AppException(Props[1001].HTTP_CODE, Props[1001].MESSAGE)
    }

    dealer.password = undefined

    return dealer
  }
}

export default new AuthenticateService()
