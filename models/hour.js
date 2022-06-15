const mongoose = require('mongoose')

const hourSchema = new mongoose.Schema({
    hourAssignee: {
        type: Number,
        required: true
    },
    startingDate: {
        type: Date,
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
