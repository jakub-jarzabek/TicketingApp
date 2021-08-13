var React = require('react')
var Ticket = require('./Ticket')
function ResolveTickets(props){
    const tickets= props.tickets
    const Items = tickets.map(ticket=>{
        return(
        <Ticket 
            key = {ticket.id}
            title = {ticket.title}
            issuedBy = {ticket.issuedBy}
            category = {ticket.category}
            description={ticket.description}
            date = {ticket.date}
            isResolved = {ticket.isResolved}
            resolvedBy = {ticket.resolvedBy}
            resolvedDate = {ticket.resolvedDate}
            comment = {ticket.comment}
            resolveBtn = {true}
        />
        )
    })

    return(
        <html>
            <head>
                <title>Resolve Tickets</title>
                <script src="https://kit.fontawesome.com/af38254b2c.js" crossOrigin="anonymous"></script>
                <link rel="stylesheet" type="text/css" href="/styles/ticket.css" />
            </head>
            <body>
                <div className='__ViewTicketsWrapper'>
                    {Items}
                </div>
            </body>
        </html>
    )
}
module.exports = ResolveTickets