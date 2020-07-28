import axios from 'axios'

class CashBackService {
  async cashback () {
    const response = await axios.get(process.env.URL_API_CASHBACK, {
      headers: {
        token: process.env.TOKEN_HEADER_API_CASHBACK
      }
    })

    return response.data
  }
}

export default new CashBackService()
