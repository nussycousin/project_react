const express = require('express');
const router = express.Router();
// const dataRoute = require('./dataRoute.js')
const userRoute = require('./userRoute.js')

router.use("/users", userRoute)
// router.use("/data", dataRoute)


router.get('/', (req, res, next) => {
    res.send("Hello World! this is live")
    next()
})

module.exports = router