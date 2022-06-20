const mongoose = require('mongoose')

const hourSchema = new mongoose.Schema({
    hourAssignee: {
        type: Number,
        required: true
    },
    startingDate: {
        type: Date,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    taskCode: {
        type: Number,
        required: true
    },
    created: {
        type: Date,
        default: Date.now,
        immutable: true
    }
})

module.exports = mongoose.model('Hour', hourSchema)
