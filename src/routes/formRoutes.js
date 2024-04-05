const express = require('express');
const router = express.Router();
const { submitFormData } = require('../controllers/formController');

// Route to handle form data submission
router.post('/', submitFormData);

module.exports = router;
