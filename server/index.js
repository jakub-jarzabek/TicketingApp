const express = require('express')
require('dotenv').config()
const app = express()
const bodyParser = require('body-parser')
const port = 3000
const authRoutes = require('./routes/index.js')
const mongoose = require('mongoose')


app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(express.json())


app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(authRoutes)

const dbURI = process.env.DB_CONNECTION
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true})
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err))






