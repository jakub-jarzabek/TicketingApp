var React = require('react')

function Panel(props){

    return(
        <html>
        <head>
          <title>Login Page</title>
          <script src="https://kit.fontawesome.com/af38254b2c.js" crossOrigin="anonymous"></script>
          <link rel="stylesheet" type="text/css" href="/styles/panel.css" />
          <link rel="stylesheet" type="text/css" href="/styles/newTask.css" />
        </head>
        <body>
            <div className='__OptionsWrapper'>
                <div className='__ViewTickets __OptionDiv'>
                    <h2 className='__OptionTitle'>Submitted Tickets</h2>
                    <i className="fas fa-ticket-alt __BigIcon"></i>  
                    <a href="/submitted">
                        <span>
                            View
                        </span>
                        <i className="fas fa-chevron-right"></i>
                    </a>
                </div>
                <div className='__ViewTickets __OptionDiv'>
                    <h2 className='__OptionTitle'>Add new ticket</h2>
                    <i className="fas fa-plus-circle __BigIcon"></i>
                    <a href="/newTicket">
                        <span>
                            add
                        </span>
                        <i className="fas fa-chevron-right"></i>
                    </a>
                </div>
                <div className='__ViewTickets __OptionDiv'>
                    <h2 className='__OptionTitle'>resolve tickets</h2>
                    <i className="fas fa-search-plus __BigIcon"></i>
                    <a href="/resolve">
                        <span>
                            resolve
                        </span>
                        <i className="fas fa-chevron-right"></i>
                    </a>
                </div>
            </div>
        </body>
      </html>
    )
}

module.exports = Panel;