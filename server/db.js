import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

class Database {
  constructor() {
    this.connect()
  }
  async connect() {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI)
      if (!conn) {
        throw new Error('Not connected to db!')
      }
      console.log(`MongoDB connected ${conn.connection.host}`)
    } catch (err) {
      console.log(err.message)
      throw new Error(err.message)
    }
  }
}

export default new Database()
