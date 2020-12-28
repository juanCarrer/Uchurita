const mongoose = require('mongoose')

const { Schema } = mongoose

const productSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  src: {
    type: String,
    required: true
  },
  cost: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.models.Product || mongoose.model('Product', productSchema)
