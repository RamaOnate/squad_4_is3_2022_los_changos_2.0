const mongoose = require('mongoose')

const hourSchema = new mongoose.Schema({
    hourCreator: {
        type: String,
        required: true
    },
    startingHour: {
        type: Number,
    },
    duration: {
        type: Number,
    },
    projectNumber: {
        type: Number,
    },
    taskNumber: {
        type: Number
    },
    created: {
        type: Date,
        default: Date.now,
        immutable: true
    }
})

module.exports = mongoose.model('Hour', hourSchema)