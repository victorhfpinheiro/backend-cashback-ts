import * as dotenv from 'dotenv'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default (() => {
  const { NODE_ENV } = process.env

  dotenv.config({
    path: NODE_ENV === 'test' ? './env/.env.test' : './env/.env'
  })
})()
