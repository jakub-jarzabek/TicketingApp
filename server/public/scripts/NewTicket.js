//Form handling
const form = document.querySelector('form');

form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const postData={
        "title":e.target[0].value,
        "issuedBy":e.target[1].value,
        "category":e.target[2].value,
        "description":e.target[3].value,
        "date":e.target[4].value,
        "isResolved": false
    }
    console.log(postData)
     try{
         const res = await fetch('/api/tickets',{
            method:'POST',
            body: JSON.stringify(postData),
            headers:{'Content-Type': 'application/json'}
         });
         const data = await res.json();
         console.log(data)
         if(data.title){
            e.target[0].value ='';
            e.target[3].value='';
            e.target[4].value=new Date().toLocaleString()
         }
         }catch(err){
         console.log(err)
     }
})