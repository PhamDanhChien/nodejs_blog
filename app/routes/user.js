const express = require('express');
const router = express.Router();
const userController = require('../../app/controllers/UserController');


router.get('/:userId', userController.show);
router.get('/', userController.index);


module.exports = router;