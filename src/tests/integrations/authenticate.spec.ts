import Dealer from '@schemas/dealer.schema'
import request from 'supertest'

import app from '../../app'

describe('Authenticate', () => {
  beforeAll(async () => {
    const dealer = {
      name: 'Jest Dealer',
      email: 'jestdealer@test.com',
      documentNumber: '04565255580',
      password: 'test@123'
    }
    await Dealer.create(dealer)
  })

  it('Credentials ok', async () => {
    await request(app)
      .post('/api/authenticate')
      .set('Accept', 'application/json')
      .send({ documentNumber: '04565255580', password: 'test@123' })
      .expect(200)
  })

  it('Credentials password not ok', async () => {
    await request(app)
      .post('/api/authenticate')
      .set('Accept', 'application/json')
      .send({ documentNumber: '04565255580', password: 'test@1234' })
      .expect(400)
  })

  it('Credentials documentNumber not ok', async () => {
    await request(app)
      .post('/api/authenticate')
      .set('Accept', 'application/json')
      .send({ documentNumber: '04565255570', password: 'test@123' })
      .expect(400)
  })

  afterAll(async () => {
    await Dealer.findOneAndDelete({ email: 'jestdealer@test.com' })
  })
})
