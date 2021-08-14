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


ticketSchema.statics.findTickets = async function(email){
    const tickets = await this.find({"issuedBy": email})
    if(tickets)
    {
        return tickets
    }
    console.log("error")
}

ticketSchema.statics.findNonResolved = async function(){
    const tickets = await this.find({"isResolved": false})
    if(tickets)
    {
        return tickets
    }
    console.log("error")
}

const Ticket = mongoose.model('ticket', ticketSchema)






module.exports = Ticket;