const express = require("express");

const vulnerabilitiesController = require('../controllers/vulnerabilities');
const router = express.Router();

router.get('/', vulnerabilitiesController.getVulnerabilities);

module.exports = router;