import app from './app'
import logger from './logger/logger.app'

const { PORT = 3000 } = process.env

app.listen(PORT, () => {
  logger.info(`🚀 Server running on port ${PORT}`)
})
