var React = require('react');
 
function LoginPage(props) {
  return (
    <html>
      <head>
        <title>{props.title}</title>
        <link rel="stylesheet" type="text/css" href="/styles/login.css" />
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
          // This is making use of ES6 template strings, which allow for
          // multiline strings. We specified "{jsx: {harmony: true}}" when
          // creating the engine in app.js to get this feature.
          console.log("hello world");
        `,
          }}
        /> */}
      </head>
      <body>
        <p>css test</p>
      </body>
    </html>
  )
}
 
module.exports = LoginPage;