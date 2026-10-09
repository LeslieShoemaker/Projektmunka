const express = require("express");

const networkController = require('../controllers/network');
const router = express.Router();

router.get('/', networkController.getNetwork);

module.exports = router;