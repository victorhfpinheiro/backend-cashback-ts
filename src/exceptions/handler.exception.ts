import { Request, Response, NextFunction } from 'express'
import AppException from './app.exception'
import Props from '@errors/app.errors'
import logger from '@logger/logger.app'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (err: Error, _req: Request, res: Response, _next: NextFunction): Response => {
  if (err instanceof AppException) {
    return res.status(err.code).json(
      {
        error: err.message
      }
    )
  }

  logger.error(err.stack)

  return res.status(500).json({
    statusCode: Props[500].HTTP_CODE,
    error: Props[500].MESSAGE
  })
}
