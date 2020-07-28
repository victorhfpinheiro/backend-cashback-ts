import { Joi, Segments } from 'celebrate'

export class PurchaseValidator {
  public static index = {
    [Segments.HEADERS]: Joi.object().keys({
      authorization: Joi.string().required()
    }).unknown()
  }

  public static create = {
    [Segments.HEADERS]: Joi.object().keys({
      authorization: Joi.string().required()
    }).unknown(),
    [Segments.BODY]: Joi.object().keys({
      code: Joi.number().required(),
      value: Joi.number().required()
    })
  }
}
