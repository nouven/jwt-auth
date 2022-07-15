const express = require('express');
const userController = require('../controllers/userController');
const middleware = require("../controllers/middleware");
const router = express.Router();

router.get('/', middleware.verifyToken, userController.getAllUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
