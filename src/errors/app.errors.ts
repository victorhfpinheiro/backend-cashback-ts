const errors = {
  500: {
    HTTP_CODE: 500,
    MESSAGE: 'Ops! Something went wrong, try again later!'
  },
  1000: {
    HTTP_CODE: 400,
    MESSAGE: 'Dealer already registered!'
  },
  1001: {
    HTTP_CODE: 400,
    MESSAGE: 'Password invalid!'
  },
  1002: {
    HTTP_CODE: 400,
    MESSAGE: 'Dealer Not Found!'
  },
  1003: {
    HTTP_CODE: 401,
    MESSAGE: 'Token mal formatted!'
  },
  1004: {
    HTTP_CODE: 401,
    MESSAGE: 'Invalid token!'
  },
  1005: {
    HTTP_CODE: 400,
    MESSAGE: 'Purchase already registered for this dealer!'
  }
}

export default errors
