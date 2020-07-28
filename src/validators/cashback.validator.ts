import { Segments, Joi } from 'celebrate'

export default class CashBackValidator {
  public static cashback = {
    [Segments.HEADERS]: Joi.object().keys({
      authorization: Joi.string().required()
    }).unknown()
  }
}
