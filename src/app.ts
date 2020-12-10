import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { router } from './routes'
import logger from './libs/logger'
import compression from 'compression'
import helmet from 'helmet'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

mongoose.connect(process.env.MONGODB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true })

app.use(morgan('common', {
  stream: {
    write: message => {
      logger.info(message)
    }
  }
}))
app.use(express.json())
app.use(cors({
  methods: ["GET"],
  allowedHeaders: ["Content-Type"]
}))
app.use(helmet())
app.use(compression())
app.use(router)

export { app }