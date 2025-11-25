const express = require('express');

const { registerUser, loginUser, protectRoute } = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');
const route = express.Router();

route.post('/register', registerUser)
route.post('/login', loginUser)
route.get('/protect', authMiddleware, protectRoute)

module.exports = route;