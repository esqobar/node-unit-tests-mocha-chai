const asyncHandler = require('express-async-handler')
const User = require('../models/user.model')

const getUsers = asyncHandler(async (req, res) => {
    try{
        const users = await User.find({}).sort({ createdAt: "DESC"})
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json({error: "Users not found" })
    }
})

const createUser = asyncHandler(async (req, res) => {
    try {
        const {name, email, age} = req.body

        if(!name || !email || !age){
            res.status(400)
            throw new Error('Please add all the fields')
        }

        const user = await User.create({
            name, age, email
        })
        res.status(201).json(user)
    } catch (error) {
        res.status(400).json({ error: 'Something went wrong'})
    }
})

const getUserById = asyncHandler(async (req, res) => {
    try{
        const user = await User.findById(req.params.id)

        if(user){
            res.status(200).json(user)
        } else {
            res.status(404)
            throw new Error('User Not Found')
        }
    } catch (error) {
        res.status(400).json({ error: 'Something went Wrong'})
    }

})

const updateUser = asyncHandler(async (req, res) => {
    try{
        const {name, email, age} = req.body
        var user = {_id: req.params.id}
        const payload = {name, email, age}

        const updatedUser = await User.findByIdAndUpdate(user, {
            $set: payload,
        })
        res.status(200).json(updatedUser)

    } catch (error) {
        res.status(404).json({ error: 'User not found'})
    }
})

const deleteUser = asyncHandler(async (req, res) => {
    try{
        const user = await User.findById(req.params.id)

        if(user){
            await User.deleteOne({ _id: user._id})
            // res.status(200).json({ message: 'User removed'})
            res.status(200).json(user)
        } else {
            res.status(404)
            throw new Error('User Not Found')
        }
    } catch (error) {
        res.status(400).json({ error: 'Something went Wrong'})
    }

})

module.exports = {
    getUsers, createUser, getUserById, updateUser, deleteUser
}