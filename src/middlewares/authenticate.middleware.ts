import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

class Auth {
  async validateJwt (req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization

    const parts = authHeader.split(' ')

    if (!(parts.length === 2)) {
      return res.status(401).send({ success: false, mensage: 'Token mal formated!' })
    }

    const [scheme, token] = parts

    if (!/^Bearer$/i.test(scheme)) {
      return res.status(401).send({ success: false, mensage: 'Token mal formated!' })
    }

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(401).send({ success: false, mensage: 'Token invalid!' })
      }

      // eslint-disable-next-line dot-notation
      req.dealerId = decoded['dealerId']

      return next()
    })
  }
}

export default new Auth()
