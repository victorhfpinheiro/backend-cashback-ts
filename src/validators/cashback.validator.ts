import { Segments, Joi, celebrate } from 'celebrate'

const cashback = celebrate({
  [Segments.HEADERS]: Joi.object().keys({
    authorization: Joi.string().required()
  }).unknown()
})

export default {
  cashback
}
