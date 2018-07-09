// tslint:disable no-any
import { Model } from 'mongoose'

import C from './_collections'
import mongoose, {
  defaultRecord,
  IMongooseRecord,
  newSchema,
} from './_helpers.mongoose'

export interface IUser extends IMongooseRecord {
  username: string,
}
interface IUserModel extends Model<IUser> {
  register: (ctx: any, args: {
    // email: string,
    username: string,
    password: string,
  }) => Promise<any>,
}

// db collection name
const COLLECTION = C.User
// db schema
const userSchema = {
  email: String,
  username: String,
}

// Schema builder
const schema = newSchema(userSchema)

const User: IUserModel = mongoose.model<IUser, IUserModel>(COLLECTION, schema)

User.register = async function(_: any, args: {
  // email: string,
  username: string,
  password: string,
}) {
  const {
    // email,
    username,
    // password,
  }  = args

  // tslint:disable-next-line no-this-assignment
  const model = this
  const fields = {
    ...defaultRecord(),
    username,
  }

  try {
    // Create User
    const record: IUser = await new model(fields)
    await record.save()

    return record
  } catch (err) {
    // tslint:disable-next-line no-console
    console.error('User.register> ', err)
    return
  }
}

export default User
