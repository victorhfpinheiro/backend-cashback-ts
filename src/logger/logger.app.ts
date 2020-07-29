import { format, transports, createLogger } from 'winston'
import { options } from '@configs/logs.config'

const custom = format.printf((info) => {
  return `[${info.timestamp}][${info.level}]: ${info.message}`
})

export const logger = createLogger({
  transports: [
    new transports.File(options.file),
    new transports.Console(options.console)
  ],
  format: format.combine(
    format(info => {
      info.level = info.level.toUpperCase()
      return info
    })(),
    format.simple(),
    format.colorize(),
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss.sss'
    }),
    custom
  ),
  handleExceptions: true,
  exitOnError: false // do not exit on handled exceptions
})

if (process.env.NODE_ENV !== 'production') {
  logger.debug('Logging initialized at debug level')
}

export default logger
