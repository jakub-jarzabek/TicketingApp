const mongoose = require('mongoose')

const ticketSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    issuedBy: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    isResolved: {
        type: Boolean,
        required: true
    },
    resolveDate: {
        type: Date,
        required: false
    },

    resolvedBy: {
        type: String,
        required: false
    },

    comment: {
        type: String,
        required: false
    }
})

const Ticket = mongoose.model('ticket', ticketSchema)






module.exports = Ticket;