const { Router } = require('express');
const {requireAuth} = require('../middleware/authMiddleware')
const router = Router();

// exports.loginPage = function (req,res){
//     res.render('LoginPage')
// }



//auth




const authController = require('../controllers/authController')
router.put('/api/tickets/:id', requireAuth, authController.updateTickets_put)
router.get('/api/tickets', requireAuth, authController.ticketsByEmail_get)
router.get('/submitted', requireAuth, authController.submittedTickets_get)
router.post('/submitted', authController.submittedTickets_post)
router.get('/resolve', requireAuth, authController.resolveTickets_get)
router.get('/newTicket', requireAuth, authController.newTicket_get)
router.post('/api/tickets', authController.newTicket_post)
router.get('/panel', requireAuth, authController.panel_get)
router.post('/panel', authController.panel_post)
router.get('/', authController.login_get)
router.post('/', authController.login_post)

module.exports = router;