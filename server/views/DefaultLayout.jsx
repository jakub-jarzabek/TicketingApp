var React = require('react');

function DefaultLayout(props) {

    return(
        <html>
        <head>
          <title>Login Page</title>
          <script src="https://kit.fontawesome.com/af38254b2c.js" crossOrigin="anonymous"></script>
          <link rel="stylesheet" type="text/css" href="/styles/panel.css" />
        </head>
        <body>
        <i class="fas fa-apple-alt"></i>
            {/* <div className='__ViewTickets'>
                <h2>Submitted Tickets</h2>
                
                <a href="">
                    <span>
                        View
                    </span>
                    <i className="fa-solid fa-circle-chevron-right"></i>
                </a>
            </div> */}
        </body>
      </html>
    )
}

module.exports = DefaultLayout;