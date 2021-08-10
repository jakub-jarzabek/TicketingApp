function getCookie(name) {
    var cookieArr = document.cookie.split(";");
    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        if(name == cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}

window.addEventListener('load', (e) => {
    setTimeout(document.querySelector('#IssuedBy').value=getCookie('currentUser'),100)
  });





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
     try{
         const res = await fetch('/newTicket',{
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