const form = document.querySelector('form');

form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const putData={ 
        "resolvedBy":e.target[0].value,
        "resolvedDate":e.target[1].value,
        "comment":e.target[2].value,
    }
    const id = e.target[3].value
     try{
         console.log(putData)
         console.log(e.target)
         const res = await fetch(`/api/tickets/${id}`,{
            method:'PUT',
            body: JSON.stringify(postData),
            headers:{'Content-Type': 'application/json'}
         });
         const data = await res.json();
         if(data.comment){
           window.location.reload() 
         }
         }catch(err){
         console.log(err)
     }
})