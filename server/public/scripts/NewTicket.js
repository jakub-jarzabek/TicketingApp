const form = document.querySelector('form');

form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    console.log(e.target[2].value)
    const data={
        "title":e.target[0].value,
        "issuedBy":e.target[1].value,
        "category":e.target[2].value,
        "description":e.target[3].value,
        "date":e.target[4].value,
        "isResolved": false
    }
     const email = e.target[0].value
     const password = e.target[1].value
     try{
         const res = await fetch('/panel',{
            method:'POST',
            body: JSON.stringify(data),
            headers:{'Content-Type': 'application/json'}
         });
        //  const data = await res.json();
        //  if(data.user){
        //      window.location.replace('http://localhost:3000/panel')
        //  }
         }catch(err){
         console.log(err)
     }
})