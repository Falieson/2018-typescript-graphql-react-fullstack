// tslint:disable no-any
const {
  NODE_PLATFORM = 'server'
} = process.env

export const ifClientCache = (cache: any, opts: any) => NODE_PLATFORM === 'server'
  ? null
  : cache.writeData({ data: opts })
