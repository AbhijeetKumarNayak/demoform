const express = require('express');
const viewsController = require('../Controller/viewController');
const router = express.Router();
router.get('/',viewsController.getform);
router.post('/Signup',viewsController.createuser);

module.exports = router;