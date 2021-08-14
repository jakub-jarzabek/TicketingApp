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
            {
            props.isResolved || !props.resolveBtn 
            ?
            null
            : 
            <form className='__ResolveForm'>
                <label htmlFor="ResolvedByInput">Resolved By:</label>
                <input type="text" id='ResolvedByInput' className='__ResolvedByInput' value={props.user} readOnly/>
                <label htmlFor="ResolvedDateInput">Resolved Date:</label>
                <input type="text" id='ResolvedDateInput' className='__ResolvedDateInput' value={new Date().toLocaleString()} readOnly/>
                <label htmlFor="ResolvedComment">Comment:</label>
                <textarea id="ResolvedComment" cols="30" rows="10"></textarea>
                <input type="hidden" id="TicketID"  value={props.ticketID}></input>
            <button className='__ResolveBtn' type='submit'>Resolve</button>
            </form>
            }

        </div>
    )
}
module.exports = Ticket;
