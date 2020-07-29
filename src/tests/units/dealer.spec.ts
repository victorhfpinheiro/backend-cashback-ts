import Dealer from '@schemas/dealer.schema'
import { compare } from 'bcrypt'
import mongoose from 'mongoose'
import '@configs/envs.config'

describe('Dealer Test', () => {
  beforeAll(async () => {
    await mongoose.connect(
      process.env.DATABASE_URL,
      {
        dbName: process.env.DATABASE_NAME,
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
      }
    )
  })

  it('should delaer create', async () => {
    const dealer = await Dealer.create({
      name: 'Jest Dealer 2',
      email: 'jestdealer2@test.com',
      documentNumber: '88899900011',
      password: 'test2@123'
    })

    const compareHash = await compare('test2@123', dealer.password)

    expect(dealer._id).not.toEqual(null || undefined)
    expect(compareHash).toBe(true)
  })

  afterAll(async () => {
    await Dealer.findOneAndDelete({ email: 'jestdealer2@test.com' })
  })
})
