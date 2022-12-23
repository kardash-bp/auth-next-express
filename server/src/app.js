import express from 'express'
import { join } from 'path'
import fs from 'fs'
import compression from 'compression'
import helmet from 'helmet'
import cors from 'cors'
import { logger } from './utils/logger'
const app = express()
app.use(cors({ origin: 'http://localhost:3000' }))

app.use(helmet())
app.use(express.json())
app.use(compression())
app.use(logger)

fs.readdirSync(join(__dirname, './routes')).map((r) => {
  const route = require(`./routes/${r}`)
  return app.use('/api', route.default)
})

export default app
