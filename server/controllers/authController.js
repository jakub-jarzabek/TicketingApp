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
module.exports.submittedTickets_get = async (req,res) => {
    res.render('ViewTickets')
    const email = "appkatest69@gmail.com"
    const tickets = await Ticket.findTickets(email)
    console.log(tickets)

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
