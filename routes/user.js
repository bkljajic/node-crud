const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

router.post('/create', userController.userCreate);
router.get('/:id', userController.userRead);
router.put('/:id', userController.userUpdate);
router.delete('/:id', userController.userDelete);

module.exports = router;