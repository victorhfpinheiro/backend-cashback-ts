import Dealer from '@schemas/dealer.schema'
import Props from '@errors/app.errors'
import AppException from '@exceptions/app.exception'

class DealerService {
  async findById (dealerId: string) {
    return await Dealer.findById(dealerId)
  }

  async create (name: string, email: string, documentNumber: string, password: string) {
    const dealerExists = await Dealer.findOne({ documentNumber })

    if (dealerExists) {
      throw new AppException(Props[1000].HTTP_CODE, Props[1000].MESSAGE)
    }

    const dealer = await Dealer.create({ name, email, documentNumber, password })

    dealer.password = undefined

    return dealer
  }
}

export default new DealerService()
