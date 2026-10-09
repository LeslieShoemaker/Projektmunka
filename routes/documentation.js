const express = require("express");

const documentationController = require('../controllers/documentation');
const router = express.Router();

router.get('/', documentationController.getDocumentation);

module.exports = router;