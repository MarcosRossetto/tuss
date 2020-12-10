import fs from 'fs'
import winston from 'winston'

if (!fs.existsSync('logs')) fs.mkdirSync('logs')

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({ filename: 'logs/app.log', level: 'info' })
  ],
})

export default logger