const { default: axios } = require("axios");

const form = document.querySelector('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
     const email = e.target[0].value
     const password = e.target[1].value
     axios.post('http://localhost:3000',{email,password})
})