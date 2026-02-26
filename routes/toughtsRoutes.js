const express = require('express')
const router = express.Router()
const ToughtsController = require('../controllers/TougthsController')

//helpers
const checkAuth = require('../helpers/auth').checkAuth


// controller
router.get('/add', checkAuth, ToughtsController.createTought)
router.post('/add', checkAuth, ToughtsController.createToughtSave)
router.get('/edit/:id', checkAuth, ToughtsController.updateTought)
router.post('/edit', checkAuth, ToughtsController.updateToughtSave)
router.get('/dashboard', ToughtsController.dashboard)
router.post('/remove', checkAuth, ToughtsController.removeTought)
router.get('/', ToughtsController.showToughts)

module.exports = router