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

  return (
    <html>
      <head>
        <title>Login Page</title>
        <link rel="stylesheet" type="text/css" href="/styles/login.css" />
      </head>
      
      <body>
        <form action="submit">
          <label htmlFor="loginInput">Login:</label>
          <input type="text" id="loginInput" value={login}/>
          <label htmlFor="passwordInput">Password:</label>
          <input type="password" id="passwordInput" value={passwd}/>
        </form>
      </body>
    </html>
  )
}
 
module.exports = LoginPage;