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
      code: Joi.string().min(1).max(6).required(),
      date: Joi.date().timestamp().iso().required().label('Format valid is 2020-07-28T16:00:00-03:00'),
      value: Joi.number().required()
    })
  }
}
