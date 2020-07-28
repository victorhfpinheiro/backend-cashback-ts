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
      code: Joi.string().length(6).required(),
      date: Joi.string().length(10).regex(new RegExp('\\d{2}/\\d{2}/\\d{4}')).required().label('Format valid is dd/mm/yyyy'),
      value: Joi.number().required()
    })
  }
}
