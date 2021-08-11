var React = require('react');
var Ticket = require('./Ticket')

function ViewTasks(props) {

    const tickets=[
        {
            "id":"2",
            "title":"test1",
            "issuedBy":"testUSer1",
            "category":"Network",
            "description":"Lorem Ipsum",
            "date":"8/8/2021, 7:46:10 PM",
            "isResolved":false,
            "resolvedDate":"",
            "resolvedBy":"",
            "comment":""
        },
        {
            "id":"2",
            "title":"test2",
            "issuedBy":"testUSer2",
            "category":"Network",
            "description":"Lorem Ipsum",
            "date":"8/8/2021, 7:46:10 PM",
            "isResolved":true,
            "resolvedDate":"8/8/2021, 7:46:10 PM",
            "resolvedBy":"testAdminUser",
            "comment":"Resolved"
            }
    ]
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
