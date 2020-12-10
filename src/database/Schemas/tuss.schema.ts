import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'

const Schema = mongoose.Schema

const schema = new Schema({
  code: {
    type: String,
    required: true,
  },
  term: {
    type: String,
    required: true,
  }
})
schema.plugin(mongoosePaginate)
export default mongoose.model('TussSchema', schema)