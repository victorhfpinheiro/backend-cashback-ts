import * as jwt from 'jsonwebtoken'

export class AuthUtils {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  public async generateToken (params): Promise<string> {
    return jwt.sign(params, process.env.SECRET_KEY, {
      expiresIn: 3600 // 30m
    })
  }
}

export default new AuthUtils()
