var React = require('react');
var NewTicket = require('./NewTicket')
var ViewTickets = require('./ViewTickets')
function DefaultLayout(props) {

    return(
    <NewTicket/>
        // <ViewTickets/>
    )
}

module.exports = DefaultLayout;