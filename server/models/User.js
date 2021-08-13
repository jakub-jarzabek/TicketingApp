const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    isAdmin: {
        type: Boolean,
        required: true
    }
})




userSchema.statics.findByToken = async function(token){

    console.log(token)
    if(token) {
        const jms = await jwt.verify(token, 'jms', async (err, decodedToken) => {
                if (err) {
                    console.log(err.message)
                } else {
                    console.log(decodedToken.id)
                    const user = await this.findOne({"_id": decodedToken.id})

                    if(user){
                    console.log('user email' + user.email)
                    return user}

                    //console.log("error")
                }


            }
        )
        return jms
    }

}

userSchema.statics.login = async function(email, password){
    const user = await this.findOne({email})
    if(user){
        if(password === user.password)
        {
            return user
        }
        throw Error('incorrect password')
    }
    throw Error('incorrect email')
}

const User = mongoose.model('user', userSchema)

module.exports = User;