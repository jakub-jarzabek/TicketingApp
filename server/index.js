const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (req,res)=>{
    res.send("<h1> JMS </h1>")
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})