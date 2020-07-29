import express from 'express'
import 'express-async-errors'
import cors from 'cors'
import * as dotenv from 'dotenv'
import bodyParser from 'body-parser'
import routes from './routes'
import { errors } from 'celebrate'
import mongoose from 'mongoose'
import handlerException from './exceptions/handler.exception'
import loggerMiddleware from './middlewares/logger.middleware'
import logger from './logger/logger.app'

class App {
  public express: express.Application;

  public constructor () {
    this.express = express()
    this.envs()
    this.logger()
    this.middlewares()
    this.database()
    this.routes()
    this.errors()
  }

  private envs (): void {
    const { NODE_ENV } = process.env

    dotenv.config({
      path: NODE_ENV === 'test' ? './env/.env.test' : './env/.env'
    })
  }

  private middlewares (): void {
    this.express.use(cors())
    this.express.use(bodyParser.json())
    this.express.use(bodyParser.urlencoded({ extended: false }))
  }

  private database (): void {
    mongoose.connect(
      process.env.DATABASE_URL,
      {
        dbName: process.env.DATABASE_NAME,
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
      }
    ).then(() =>
      logger.info('Database connected.')

    ).catch((err) =>
      logger.error('Error connecting to the database.', err)
    )
  }

  private logger (): void {
    const { NODE_ENV } = process.env
    if (NODE_ENV !== 'test') {
      this.express.use(loggerMiddleware)
    }
  }

  private routes (): void {
    this.express.use(process.env.PREFIX_URL || '/api', routes)
  }

  private errors (): void {
    this.express.use(errors())
    this.express.use(handlerException)
  }
}

export default new App().express
