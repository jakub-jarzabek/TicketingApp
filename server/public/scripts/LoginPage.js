const form = document.querySelector('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
     const email = e.target[0].value
     const password = e.target[1].value
     console.log(email + password)
})