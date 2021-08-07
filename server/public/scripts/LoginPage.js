

const form = document.querySelector('form');

form.addEventListener('submit', async (e)=>{
    e.preventDefault();
     const email = e.target[0].value
     const password = e.target[1].value
     try{
         const res = await fetch('/',{
            method:'POST',
            body: JSON.stringify({email, password}),
            headers:{'Content-Type': 'application/json'}
         });
         const data = await res.json();
         console.log(data)
         }catch(err){
         console.log(err)
     }
})