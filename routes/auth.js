const authControllers = require('../controllers/authControllers');
const express = require('express');
const router = express.Router();

router.post('/register', authControllers.registerUser);
router.post('/login', authControllers.loginUser);
module.exports = router;
