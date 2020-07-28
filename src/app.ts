import express from 'express'
import 'express-async-errors'
import cors from 'cors'
import * as dotenv from 'dotenv'
import bodyParser from 'body-parser'
import routes from './routes'
import { errors } from 'celebrate'
import mongoose from 'mongoose'
import handlerException from './exceptions/handler.exception'
import loggerMiddleware from '@middlewares/logger.middleware'

class App {
  public express: express.Application;

  public constructor () {
    this.express = express()
    this.envs()
    this.middlewares()
    this.database()
    this.logger()
    this.routes()
    this.errors()
  }

  private envs (): void {
    dotenv.config()
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
      console.log('Database connected.')
    ).catch((err) =>
      console.error('Error connecting to the database.', err)
    )
  }

  private logger (): void {
    this.express.use(loggerMiddleware)
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
