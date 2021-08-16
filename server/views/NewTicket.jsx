var React = require('react')
function NewTicket(props){
    return(
    <html>
    <head>
      <title>New Task</title>
      <link rel="stylesheet" type="text/css" href="/styles/login.css" />
      <link rel="stylesheet" type="text/css" href="/styles/newTask.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
    </head>
    <body>
    <a href="/panel" className='__BackBtn'>
    <i className="arrow left"></i>
            Back
            </a>
            <a className='__Logout' href='/logout' id='Logout'>Logout</a>
       <div className='__FormWrapper'>
           <h1 className='__NewTaskHeader'>New Task</h1>
           <form action="" className='__NewTaskForm'>
                <label className='__FormLabel' htmlFor="NewTaskTitle">Title:</label>
                <input className='__FormInput' type="text" id='NewTaskTitle'/>
                <label className='__FormLabel' htmlFor="IssuedBy">Issued by:</label>
                <input className='__FormInput' type="text" id='IssuedBy' value={props.user} readOnly/>
                <label className='__FormLabel' htmlFor="Category">Category:</label>
                <select className='__FormInput' name='category' id="Category">
                    <option value="Network">Network</option>
                    <option value="Hardware">Hardware</option>
                    <option value="Software">Software</option>
                    <option value="Other">Other</option>
                </select>
                <label className='__FormLabel' htmlFor="Description">Description:</label>
                <textarea className='__FormInput' id="Description" cols="30" rows="10"></textarea>
                <label className='__FormLabel' htmlFor="Date">Date:</label>
                <input className='__FormInput' type="text" value={new Date().toLocaleString()} readOnly/>
                <button type='submit' className='__SubmitBtn'>Submit</button>
           </form>
       </div>
    </body>
    <script src='/scripts/NewTicket.js'/>
  </html>
)
}

module.exports = NewTicket;