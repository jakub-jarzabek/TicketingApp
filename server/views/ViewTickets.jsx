var React = require('react');
var Ticket = require('./Ticket')

function ViewTasks(props) {

    const tickets=props.tickets
    const Items = tickets.map(ticket=>{
        return(
        <Ticket 
            key = {ticket._id}
            title = {ticket.title}
            issuedBy = {ticket.issuedBy}
            category = {ticket.category}
            description={ticket.description}
            date = {ticket.date}
            isResolved = {ticket.isResolved}
            resolvedBy = {ticket.resolvedBy}
            resolvedDate = {ticket.resolvedDate}
            comment = {ticket.comment}
            resolveBtn = {false}
        />
        )
    })
    return( 
        <html>
            <head>
                <title>View Tickets</title>
                <script src="https://kit.fontawesome.com/af38254b2c.js" crossOrigin="anonymous"></script>
                <link rel="stylesheet" type="text/css" href="/styles/ticket.css" />
                <link rel="stylesheet" type="text/css" href="/styles/newTask.css" />
            </head>
            <body>
            <a href="/panel" className='__BackBtn'>
                <i className="arrow left"></i>
                Back
            </a>
                <div className='__ViewTicketsWrapper'>
                    {Items}
                </div>
            </body>
        </html>
    )
}

module.exports = ViewTasks
