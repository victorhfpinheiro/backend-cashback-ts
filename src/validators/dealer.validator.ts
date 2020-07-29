import { Segments, Joi, celebrate } from 'celebrate'

const create = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    documentNumber: Joi.string().length(11).required(),
    password: Joi.string().required()
  }).unknown()
})

export default {
  create
}
