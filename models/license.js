const mongoose = require('mongoose')

const licenseSchema = new mongoose.Schema({
  licensedPersonCode: {
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
  licenseType: {
    type: String,
    enum: [
      'Salud',
      'Vacaciones',
      'Maternidad'
    ]
  },
  created: {
    type: Date,
    default: Date.now,
    immutable: true
  }
})

module.exports = mongoose.model('License', licenseSchema)