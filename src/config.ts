// # Global configuration settings
export const {
  APP_NAME = 'TGR-demo',
  APP_PORT = 3000,
  HOST_NAME = '0.0.0.0', // NOTE: accessible on LAN, unlike 'localhost'
  NODE_ENV = 'dev',
} = process.env

// ## Helpers based on the above
export const isProd = NODE_ENV === 'prod'
