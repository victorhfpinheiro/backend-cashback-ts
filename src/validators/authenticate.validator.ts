import { Joi, Segments } from 'celebrate'

export class AuthenticateValidator {
  public static authenticate = {
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().required(),
      password: Joi.string().required()
    }).unknown()
  }
}
