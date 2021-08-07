const { Router } = require('express');
const router = Router();

// exports.loginPage = function (req,res){
//     res.render('LoginPage')
// }



//auth




const authController = require('../controllers/authController')


router.get('/', authController.login_get)
router.post('/', authController.login_post)

module.exports = router;