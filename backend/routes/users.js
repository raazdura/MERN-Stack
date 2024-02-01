const express = require('express')

// user controllor
const { signupUser, loginUser } = require('../controllors/userControllor')

const router = express.Router()

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

module.exports = router