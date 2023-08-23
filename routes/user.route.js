const express = require('express')
const {getUsers, getUserById, updateUser, deleteUser, createUser} = require("../resources/user.controller");

const router = express.Router()

router.post('/user', createUser)
router.get('/users', getUsers)
router.get('/user/:id', getUserById)
router.put('/user/:id', updateUser)
router.delete('/user/:id', deleteUser)

module.exports = router