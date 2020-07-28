import { Joi, Segments } from 'celebrate'

export class AuthenticateValidator {
  public static authenticate = {
    [Segments.BODY]: Joi.object().keys({
      documentNumber: Joi.string().length(11).required(),
      password: Joi.string().required()
    }).unknown()
  }
}
