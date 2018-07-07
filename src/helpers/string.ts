export const webaddress = ({
  protocol = 'http',
  host = 'localhost',
  port = 99999,
  path = '/'
}: {
  protocol?: string
  host?: string
  port?: string | number
  path?: string
} = {}) =>
  `${protocol}://${host}:${port}/${path.length > 1 && path.substring(0, 1) === '/'
    ? path.substring(1, path.length) : path}`
