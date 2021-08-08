var React = require('react');

function LoginPage(props) {
  return (
    <html>
      <head>
        <title>Login Page</title>
        <link rel="stylesheet" type="text/css" href="/styles/login.css" />
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