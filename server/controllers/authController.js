const User = require('../models/User')

//auth
module.exports.panel_get = (req,res) => {
    res.render('DefaultLayout')
}

module.exports.panel_post = (req,res) => {
    res.send('panel post')
}


module.exports.login_get = (req, res) => {
    res.render('LoginPage')
}

module.exports.login_post = async (req, res) => {
    const { email, password } = req.body

    try{
        const user = await User.login(email, password)
        res.status(200).json({user: user._id})
        location.replace('http://localhost:3000/panel')

    }
    catch{
        res.status(400).json({})
    }

}
