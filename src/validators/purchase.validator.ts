import { celebrate, Joi, Segments } from 'celebrate'

const create = celebrate({
  [Segments.HEADERS]: Joi.object().keys({
    authorization: Joi.string().required()
  }).unknown(),
  [Segments.BODY]: Joi.object().keys({
    code: Joi.string().min(1).max(6).required(),
    date: Joi.date().timestamp().iso().required().label('Format is valid yyyy-MM-ddTHH:mm:ss-00:00'),
    value: Joi.number().required()
  })
})

const index = celebrate({
  [Segments.HEADERS]: Joi.object().keys({
    authorization: Joi.string().required()
  }).unknown()
})

export default {
  create,
  index
}
