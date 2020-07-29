import appRoot from 'app-root-path'

export const timestampFormat = 'YYYY-MM-DD HH:mm:ss.sss'

export const options = {
  file: {
    level: 'info',
    filename: `${appRoot}/logs/app.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: true,
    colorize: true,
    meta: true
  }
}
