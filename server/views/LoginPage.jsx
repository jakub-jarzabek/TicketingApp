var React = require('react');
import {useState} from 'react';

function LoginPage(props) {
  const [login, setLogin] = useState();
  const [passwd, setPasswd] = useState();

  const handleOnChange = (e)=>{
    switch (e.target.id){
      case 'loginInput':
        setLogin(e.target.value)
        break;
      case 'passwordInput':
        setPasswd(e.target.value)
        break;
    }
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(`Login: ${login} Password: ${passwd}`)
  }

  return (
    <html>
      <head>
        <title>Login Page</title>
        <link rel="stylesheet" type="text/css" href="/styles/login.css" />
      </head>
      
      <body>
        <form action="submit" onSubmit={handleOnSubmit} className='__LoginForm'>
          <h1 className='__LoginHeader'>Login</h1>
          <label htmlFor="loginInput" className='__FormLabel' >
            Login:
          </label>
          <input
          type="text"
          id="loginInput"
          value={login}
          onChange={handleOnChange}
          className='__FormInput'
          />
          <label htmlFor="passwordInput" className='__FormLabel'>
            Password:
          </label>
          <input
           type="password"
           id="passwordInput"
           value={passwd}
           onChange={handleOnChange}
           className='__FormInput'
           />
           <button type='Submit' className='__SubmitBtn'>
             Login
           </button>
        </form>
      </body>
    </html>
  )
}
 
module.exports = LoginPage;