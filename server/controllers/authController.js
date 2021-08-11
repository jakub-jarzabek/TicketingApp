const User = require('../models/User')
const Ticket = require('../models/Ticket')
const jwt = require('jsonwebtoken')


const maxAge = 3 * 24 * 60 * 60
const createToken = (id) => {
    return jwt.sign({id}, 'jms',{
        expiresIn: maxAge
    })
}


//auth

module.exports.ticketsByEmail_get = async  (req, res) =>{
    const token =  req.cookies.jwt
    console.log(token)
    try{
        const email = await User.findByToken(`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMGVkZTJmNTc3NzM1MmI1M2IzZjdhYSIsImlhdCI6MTYyODY5NzUxNiwiZXhwIjoxNjI4OTU2NzE2fQ.B_j65mYBID7B3LuC9px0mRuVqNRZ7o8XB8jD0ry-4L0`)
        const tickets = await Ticket.findTickets(email)
            .then(tickets => res.json(tickets))
    }
    catch(err)
    {
        console.log(err)
    }





}

module.exports.submittedTickets_get = async (req,res) => {
    res.render('ViewTickets')



}

module.exports.submittedTickets_post =  (req,res) => {
    // res.send('panel post')
    console.log('submittedTickets post')
}



module.exports.newTicket_get =  (req,res) => {

    res.render('DefaultLayout')

}

module.exports.newTicket_post = async (req,res) => {
    // res.send('panel post')
    const {title, issuedBy, category, description, date, isResolved} = req.body

    try{
        const ticket = await Ticket.create({title, issuedBy, category, description, date, isResolved})
        res.status(201).json(ticket)
    }
    catch(err){
        res.status(400).json({})
    }
}


module.exports.panel_get = (req,res) => {
    res.render('Panel')
}

module.exports.panel_post = async (req,res) => {
    // res.send('panel post')
    console.log('panel post')
}


module.exports.login_get = (req, res) => {
    res.render('LoginPage')
}

module.exports.login_post = async (req, res) => {
    const { email, password } = req.body

    try{
        const user = await User.login(email, password)

        const token = createToken(user._id)
        res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge * 1000})
        res.status(200).json({user: user._id, email: user.email})


    }
    catch{
        res.status(400).json({})
    }

}
