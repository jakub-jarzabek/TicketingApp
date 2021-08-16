var React = require('react');

function LoginPage(props) {
  return (
    <html>
      <head>
        <title>Login Page</title>
        <link rel="stylesheet" type="text/css" href="/styles/login.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <form  className='__LoginForm'>
          <h1 className='__LoginHeader'>Login</h1>
          <label htmlFor="loginInput" className='__FormLabel' >
            Email:
          </label>
          <input
          type="text"
          id="loginInput"
          name="email"
          className='__FormInput'
          />
          <label htmlFor="passwordInput" className='__FormLabel'>
            Password:
          </label>
          <input
           type="password"
           id="passwordInput"
           name="password"
           className='__FormInput'
           />
           <button className='__SubmitBtn' type='submit'>
             Login
           </button>
        </form>
      </body>
      <script src='/scripts/LoginPage.js'/>
    </html>
  )
}
 
module.exports = LoginPage;