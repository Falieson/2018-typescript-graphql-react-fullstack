import * as morgan from 'morgan'
import { isProd } from '../../../config'

export default [
  morgan(isProd ? 'combined' : 'dev')
]
