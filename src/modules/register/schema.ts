import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
  appnbr: String,
  name: String,
  age: String,
  gender: String,
  father: String,
  mother: String,
  address: String,
  grade: String,
  entrtest: String
});

export default mongoose.model('registration', schema);