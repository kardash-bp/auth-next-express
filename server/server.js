import http from 'http'
import dotenv from 'dotenv'
dotenv.config()
import 'express-async-errors'
import './db'
import app from './src/app'

const server = http.createServer(app)
const port = process.env.PORT || 4000
server.listen(port, () => {
  console.log(
    `[server]: CORS enabled server is running at http://localhost:${port}`
  )
})
