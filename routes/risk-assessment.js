const express = require("express");

const riskassessmentController = require('../controllers/risk-assessment');
const router = express.Router();

router.get('/', riskassessmentController.getRiskAssessment);

module.exports = router;