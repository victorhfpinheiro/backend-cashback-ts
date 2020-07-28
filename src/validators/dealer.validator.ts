import { Segments, Joi } from 'celebrate'

export class DealerValidator {
  public static create = {
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      documentNumber: Joi.string().length(11).required(),
      password: Joi.string().required()
    }).unknown()
  }
}
