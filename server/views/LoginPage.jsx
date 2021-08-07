var React = require('react');
import e from 'express';
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
   console.log(login, passwd)
  }

  return (
    <html>
      <head>
        <title>Login Page</title>
        <link rel="stylesheet" type="text/css" href="/styles/login.css" />
      </head>
      <body>
        <form  className='__LoginForm' onSubmit={handleOnSubmit}>
          <h1 className='__LoginHeader'>Login</h1>
          <label htmlFor="loginInput" className='__FormLabel' >
            Email:
          </label>
          <input
          type="text"
          id="loginInput"
          name="email"
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
           name="password"
           value={passwd}
           onChange={handleOnChange}
           className='__FormInput'
           />
           <button className='__SubmitBtn' type='submit'>
             Login
           </button>
        </form>
      </body>
    </html>
  )
}
 
module.exports = LoginPage;