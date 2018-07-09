// tslint:disable no-any
import { ObjectID } from 'bson'
import * as mongoose from 'mongoose'

(mongoose as any).Promise = global.Promise

export const ObjectIdType = mongoose.Schema.Types.ObjectId
export const ObjectId = mongoose.Types.ObjectId

export const defaultSchema = () => ({
  _id: ObjectIdType,
})
export const defaultRecord = () => ({
  _id: new ObjectId(),
})
export const newSchema = (schema: any) => new mongoose.Schema({
  ...defaultSchema(),
  ...schema,
})

export interface IMongooseRecord extends mongoose.Document {
  _id: ObjectID,
}

export default mongoose
