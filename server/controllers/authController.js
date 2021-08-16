const User = require('../models/User')
const Ticket = require('../models/Ticket')
const jwt = require('jsonwebtoken')
const fetch = require('node-fetch')

const maxAge = 3 * 24 * 60 * 60
const createToken = (id) => {
    return jwt.sign({id}, 'jms',{
        expiresIn: maxAge
    })
}


//auth

module.exports.updateTickets_put = async (req, res) =>{

    const token =  req.cookies.jwt || req.headers["x-access-token"]
    const user = await User.findByToken(token)
    if(user.isAdmin){
        const {resolveDate, resolvedBy, comment} = req.body
        const ticket = await Ticket.findByIdAndUpdate({_id:req.params.id}, {
            resolveDate,
            resolvedBy,
            comment,
            "isResolved": true
        }).then(function(){
            Ticket.findOne({_id:req.params.id}).then(function(Ticket){
                res.send(Ticket)
            })
        })

    }

}



module.exports.ticketsByEmail_get = async  (req, res) =>{
    const token = await req.cookies.jwt ||req.headers["x-access-token"]
    const method = await req.headers["method"]
    if(method === "resolve")
    {
        const tickets = await Ticket.findNonResolved()
        res.send(tickets)
    }else{
    try{
        const user = await User.findByToken(token)
        const tickets = await Ticket.findTickets(user.email)
        res.send(tickets)
    }
    catch(err)
    {
        console.log(err)
    }}





}
  
module.exports.submittedTickets_get = async (req,res) => {
    const token =  req.cookies.jwt
   const tickets = await fetch('http://localhost:3000/api/tickets', {
        method: 'get',
        headers: { 'x-access-token': token },
    })
    .then(response => response.json())
    .then(data => Array.from(data));
     await res.render('ViewTickets',{tickets:tickets})
    
    }
    
    module.exports.resolveTickets_get = async (req,res) => {
        const token =  req.cookies.jwt
        const user = await User.findByToken(token)
        if(user.isAdmin){
            const tickets = await fetch('http://localhost:3000/api/tickets', {
            method: 'get',
            headers: { 'x-access-token': token,
                        'method':"resolve"},
        })
        .then(response => response.json())
        .then(data => Array.from(data));


         await res.render('ResolveTickets',{tickets, user:user.email})
        }
        else{
            res.redirect('/panel');
        }
       
        
        }




module.exports.submittedTickets_post =  (req,res) => {
    // res.send('panel post')
    console.log('submittedTickets post')
}



module.exports.newTicket_get =  async(req,res) => {
    const token =  req.cookies.jwt
    const user = await User.findByToken(token)
     await res.render('NewTicket',{user:user.email})

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


module.exports.panel_get = async (req,res) => {
    const token =  req.cookies.jwt
    const user = await User.findByToken(token)
    await res.render('Panel',{admin:user.isAdmin})
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
module.exports.logout_get = async (req,res) =>{
res.cookie('jwt','',{maxAge:1});
res.redirect('/')
}
