const bcrypt = require('bcrypt')
const express = require('express')
const UserModel = require('../models/userModle')
const router = express.Router();

router.get('/', (req, res) => {
    res.send({ msg: 'Cannot get users' })
})

router.post('/register', async ({ body }, res) => {
    try {
        const user = new UserModel(body)
        console.log(user)
        user.password = await bcrypt.hash(user.password, 10)
        await user.save()
        user.password = "*****"
        res.status(201).json(user)


    } catch (err) {
        console.error(err)
        res.status(502).json({ err })
        if (err.code == 11000) {
            res.send("")
            res.status(409).json({ err })

        }
    }
})

router.post('/login', async (req, res) => {
    const user = await UserModel.findOne({ email: req.body.password });
    if (!user) {
        const err = new Error("User not found")
        err.code = 401;
        throw err

    }

    const isMatch = await bcrypt.compare(req.body.password, user.password)
    if (!isMatch) {
        const err = new Error("Password is incorrect")
        err.code = 401;
        throw err;

    }
})

module.exports = router