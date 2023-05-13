import axios from 'axios'
import { environment } from 'environments'

const HTTP_ERROR_MESSAGES = {
  400: 'Validation Error',
  401: 'You should be authenticated to be able to see this page',
  403: 'Unauthorized',
  404: 'Not found',
  406: 'Bad request',
}

const DEFAULT_ERROR_MESSAGE = 'Something went wrong. Try again later'

const getMessage = (status, data) =>
  data.error ??
  data.message ??
  HTTP_ERROR_MESSAGES[status] ??
  DEFAULT_ERROR_MESSAGE

axios.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error?.response) {
      const { status, data } = error.response
      if (status === 401) {
        //localStorage.removeItem('AUTH_TOKEN')
        return
      }
      return Promise.reject({ message: getMessage(status, data), error: data })
    }
    if (error?.message === 'Network Error') {
      return
    }
    return Promise.reject({
      message: error?.message ?? 'Something went wrong',
    })
  }
)

axios.interceptors.request.use(
  (config) => {
    const url = new URL(environment.BACKEND_URL_SUFFIX, environment.BACKEND_URL)
    config.baseURL = url.href
    const token = localStorage.getItem('AUTH_TOKEN')
    if (token && config.headers) {
      config.headers.auth = token
    }
    return config
  },
  (error) => Promise.reject(error)
)

export default axios
