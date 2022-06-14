const mongoose = require('mongoose')

const hourSchema = new mongoose.Schema({
    hourAssignee: {
        type: Number,
        required: true
    },
    startingHour: {
        type: Number,
    },
    duration: {
        type: Number,
    },
    taskCode: {
        type: Number
    },
    created: {
        type: Date,
        default: Date.now,
        immutable: true
    }
})

module.exports = mongoose.model('Hour', hourSchema)
