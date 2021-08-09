var React = require('react')

function Ticket(props){

    return(
        <div className='__TicketWrapper'>
            <h1 className='__TicketTitle'>{props.title}</h1>
            <h2 className='__TicketIssuedBy'>Issued by: {props.issuedBy}</h2>
            <h2 className='__TicketCategory'>Category: {props.category}</h2>
            <h2 className='__TicketPostDate'>Post date: {props.date}</h2>
            <p className='__TicketDescription'>{props.description}</p>
            {props.resolvedDate ? <h2 className='__TicketResolvedDate'>Resolved date : {props.resolvedDate}</h2> : null}
            {props.resolvedBy ? <h2 className='__TicketResolvedBy'>Resolved by : {props.resolvedBy}</h2> : null}
            {props.comment ? <p className='__TicketComment'>{props.comment}</p> : null}
            {!props.isResolved ?
            <p className='__TicketResolved' style={{color:'blue'}}>Status: Open</p>
            :
            <p className='__TicketResolved' style={{color:'green'}}>Status: Resolved</p>}
            {props.isResolved ? null : <button className='__ResolveBtn'>Resolve</button>}
        </div>
    )
}
module.exports = Ticket;
