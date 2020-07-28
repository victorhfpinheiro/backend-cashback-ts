import DealerService from '@services/dealer.service'
import Purchase from '@schemas/purchase.schema'
import moment from 'moment'

class PurchaseService {
  async index (dealerId: string) {
    const dealer = await DealerService.findById(dealerId)

    const purchases = await Purchase.find({ dealer: dealer })

    return purchases
  }

  async create (dealerId: string, code: number, date: string, value: number) {
    const dealer = await DealerService.findById(dealerId)

    const dtFormatted: Date = moment(date, 'DD/MM/YYYY', true).toDate()

    const purchase = await Purchase.create({ code, date: dtFormatted, value, dealer })
    purchase.dealer = undefined

    return purchase
  }
}

export default new PurchaseService()
