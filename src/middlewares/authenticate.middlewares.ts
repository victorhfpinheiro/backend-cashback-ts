import { Request, Response, NextFunction } from 'express'

class Auth {
  async validate (req: Request, res: Response, next: NextFunction) {
    next()
  }
}

export default new Auth()
