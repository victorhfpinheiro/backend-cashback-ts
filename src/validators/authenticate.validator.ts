import { Joi, Segments, celebrate } from 'celebrate'

const authenticate = celebrate({
  [Segments.BODY]: Joi.object().keys({
    documentNumber: Joi.string().length(11).required(),
    password: Joi.string().required()
  }).unknown()
})

export default {
  authenticate
}
