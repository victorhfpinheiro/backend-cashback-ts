import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
import routes from './routes'
import { errors } from 'celebrate'
import mongoose from 'mongoose'

class App {
  public express: express.Application;

  public constructor () {
    this.express = express()
    this.middlewares()
    this.database()
    this.routes()
    this.envs()
  }

  private middlewares (): void {
    this.express.use(express.json())
    this.express.use(cors())
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
      console.log('Conexão com banco de dados realizada com sucesso.')
    ).catch((err) =>
      console.error('Erro ao conectar no banco de dados', err)
    )
  }

  private routes (): void {
    this.express.use(process.env.PREFIX_URL || '/api', routes)
    this.express.use(errors())
  }

  private envs (): void {
    dotenv.config()
  }
}

export default new App().express
