

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

    console.log(email, password)
    res.send('user login')
}