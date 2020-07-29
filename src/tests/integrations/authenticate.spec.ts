import Dealer from '@schemas/dealer.schema'
import request from 'supertest'

import app from '../../app'

describe('Authenticate Dealer', () => {
  test('Create Dealer', async () => {
    const dealer = await Dealer.create({
      name: 'Jest Dealer',
      email: 'jestdealer@test.com',
      documentNumber: '04565255580',
      password: 'test@123'
    })

    expect(dealer._id).not.toEqual(null || undefined)
  })

  test('Credentials ok', async () => {
    await request(app)
      .post('/api/authenticate')
      .set('Accept', 'application/json')
      .send({ documentNumber: '04565255580', password: 'test@123' })
      .expect(200)
  })

  test('Credentials password not ok', async () => {
    await request(app)
      .post('/api/authenticate')
      .set('Accept', 'application/json')
      .send({ documentNumber: '04565255580', password: 'test@1234' })
      .expect(400)
  })

  test('Credentials documentNumber not ok', async () => {
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
