import { serialize } from 'cookie'

interface CookieOptions {
  expires?: Date
  maxAge?: number
}

/**
 * This sets `cookie` on `res` object
 */
const cookie = (res, name, value, options: CookieOptions = {}) => {
  const stringValue =
    typeof value === 'object' ? 'j:' + JSON.stringify(value) : String(value)

  if (typeof options.maxAge !== 'undefined') {
    options.expires = new Date(Date.now() + (options.maxAge || 0))
    options.maxAge /= 1000
  }

  res.setHeader('Set-Cookie', serialize(name, String(stringValue), options))
}

/**
 * Adds `cookie` function on `res.cookie` to set cookies for response
 */
const cookies = (handler) => (req, res) => {
  res.cookie = (name, value, options) => cookie(res, name, value, options)

  return handler(req, res)
}

export default cookies
