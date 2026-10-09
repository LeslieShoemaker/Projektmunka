const express = require("express");

const monitoringController = require('../controllers/monitoring');
const router = express.Router();

router.get('/', monitoringController.getMonitoring);

module.exports = router;