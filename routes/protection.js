const express = require("express");

const protectionController = require('../controllers/protection');
const router = express.Router();

router.get('/', protectionController.getProtection);

module.exports = router;