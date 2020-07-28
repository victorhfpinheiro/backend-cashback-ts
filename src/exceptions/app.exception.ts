class AppException extends Error {
  public readonly code: number
  public readonly error: string

  constructor (code: number, message: string) {
    super(message)
    this.code = code
    this.error = message
  }
}

export default AppException
