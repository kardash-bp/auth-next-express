export class AppError extends Error {
  constructor(args) {
    super(args.description)

    Object.setPrototypeOf(this, new.target.prototype)

    this.name = args.name || 'Error'
    this.httpCode = args.httpCode

    if (args.isOperational !== undefined) {
      this.isOperational = args.isOperational
    }
    Error.captureStackTrace(this)
  }
}
class ErrorHandler {
  isGuestError(error) {
    if (error instanceof AppError) return error.isOperational

    return false
  }
  handleError(error, response) {
    if (this.isGuestError(error) && response) {
      this.handleGuestError(error, response)
    } else {
      this.handleCriticalError(error, response)
    }
  }

  handleGuestError(error, response) {
    response.status(error.httpCode).json({ message: error.message })
  }
  handleCriticalError(error, response) {
    //console.log('critical: ->', error)
    if (response && error.name === 'CastError') {
      response.status(HttpCode.BAD_REQUEST).json({ message: error.message })
    } else if (response) {
      console.log(`Response critical: -> ${response.statusCode}`)
      response
        .status(HttpCode.INTERNAL_SERVER_ERROR)
        .json({ message: 'Internal server error' })
    } else {
      console.log('Application encountered a critical error.')
      process.exit(1)
    }
  }
}

export const errorHandler = new ErrorHandler()
