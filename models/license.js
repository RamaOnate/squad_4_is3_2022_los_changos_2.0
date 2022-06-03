const mongoose = require('mongoose')

const licenseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('License', licenseSchema)