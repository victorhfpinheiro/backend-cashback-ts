import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import AppException from '@exceptions/app.exception'
import Props from '@errors/app.errors'

class Auth {
  async validateJwt (req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization

    const parts = authHeader.split(' ')

    if (!(parts.length === 2)) {
      throw new AppException(Props[1003].HTTP_CODE, Props[1003].MESSAGE)
    }

    const [scheme, token] = parts

    if (!/^Bearer$/i.test(scheme)) {
      throw new AppException(Props[1003].HTTP_CODE, Props[1003].MESSAGE)
    }

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        throw new AppException(Props[1004].HTTP_CODE, Props[1004].MESSAGE)
      }

      // eslint-disable-next-line dot-notation
      req.dealerId = decoded['dealerId']

      return next()
    })
  }
}

export default new Auth()
