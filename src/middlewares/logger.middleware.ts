import { logger } from 'express-winston'
import { options } from '@configs/logs.config'
import { transports, format } from 'winston'

const custom = format.printf((info) => {
  return `[${info.timestamp}][${info.level}]: ${info.message} ${JSON.stringify(info.meta)}`
})

const loggerMiddleware = logger({
  transports: [
    new transports.File(options.file),
    new transports.Console(options.console)
  ],
  format: format.combine(
    format(info => {
      info.level = info.level.toUpperCase()
      return info
    })(),
    format.colorize(),
    format.json(),
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss.sss'
    }),
    custom
  ),
  meta: true, // optional: control whether you want to log the meta data about the request (default to true)
  msg: 'HTTP {{req.method}} {{req.url}} {{res.statusCode}}', // optional: customize the default logging message. E.g. "{{req.method}} {{res.responseTime}}ms {{req.url}}"
  expressFormat: true
})

export default loggerMiddleware
