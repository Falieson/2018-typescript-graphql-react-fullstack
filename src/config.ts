// # Global configuration settings
// extract all the env config that is used
// put env based helpers here
// env defaults are set in `.env.example`

export const {
  NODE_ENV,
} = process.env

// ## Helpers based on the above
export const isProd = NODE_ENV === 'prod'
