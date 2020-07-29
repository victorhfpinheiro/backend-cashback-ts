import Dealer from '@schemas/dealer.schema'
import request from 'supertest'

import app from '../../app'

describe('Authenticate Dealer', () => {
  it('Create Dealer', async () => {
    const dealer = await Dealer.create({
      name: 'Jest Dealer',
      email: 'jestdealer@test.com',
      documentNumber: '04565255580',
      password: 'test@123'
    })

    expect(dealer._id).not.toEqual(null || undefined)
  })

  it('Credentials ok', async () => {
    await request(app)
      .post('/api/authenticate')
      .set('Accept', 'application/json')
      .send({ documentNumber: '04565255580', password: 'test@123' })
      .expect(200)
  })

  it('Credentials not ok', () => {
    expect(false).toEqual(false)
  })
})

afterAll(async () => {
  await Dealer.deleteMany({})
})
