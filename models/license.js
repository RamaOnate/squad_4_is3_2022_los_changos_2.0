const mongoose = require('mongoose')

const licenseSchema = new mongoose.Schema({
  licensedPerson: {
    type: Number,
    required: true,
    immutable: true
  }, 
  startingDate: {
    type: Date,
  },
  durationDays: {
    type: Number,
  },
  approved: {
    type: Boolean,
    default: false
  },
  created: {
    type: Date,
    default: Date.now,
    immutable: true
  }
})

module.exports = mongoose.model('License', licenseSchema)