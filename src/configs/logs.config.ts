import appRoot from 'app-root-path'

export const timestampFormat = 'YYYY-MM-DD HH:mm:ss.sss'

let level: string, silent: boolean
switch (process.env.NODE_ENV) {
  case 'production':
    level = 'warning'
    silent = false
    break
  case 'test':
    level = 'emerg'
    silent = true
    break
  default:
    level = 'debug'
    silent = false
    break
}

export const options = {
  file: {
    level: level,
    silent: silent,
    filename: `${appRoot}/logs/app.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false
  },
  console: {
    level: level,
    silent: silent,
    handleExceptions: true,
    json: true,
    colorize: true,
    meta: true
  }
}
