import { HttpCode } from './errorHandler'

class BadRequestError extends Error {
  constructor(message) {
    super(message)
    this.statusCode = HttpCode.BAD_REQUEST
  }
}
export default BadRequestError
