const express = require('express');
const usersController = require('./users.controller')

const router = express.Router();

router.get('/users', usersController.findAll)

router.post('/users', usersController.create)

router.get('/users/:id', usersController.findOne)

router.patch('/users/:id', usersController.update)

router.delete('/users/:id', usersController.deleteUsers)


module.exports = router;