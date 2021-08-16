const jwt = require('jsonwebtoken')

const requireAuth = (req, res, next) => {
    // const token = req.cookies.jwt
    const token = req.headers["x-access-token"] || req.cookies.jwt

    if(token){
        jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
            if(err){
                console.log(err.message)
                res.redirect('/')
            } else {
                console.log(decodedToken)
                req.decodedToken=decodedToken

                next()
            }
        })
    }
    else{
        res.redirect('/')
    }
}
module.exports = { requireAuth }