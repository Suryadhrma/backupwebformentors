const express = require('express');
const router = express.Router();
const {
    getValidationRequests,
    getValidationRequestDetails,
    updateValidationRequestStatus,
} = require('../controllers/courseValidationController');

// Routes
router.get('/', getValidationRequests); // Get all validation requests
router.get('/:id', getValidationRequestDetails); // Get details of a specific request
router.put('/:id', updateValidationRequestStatus); // Update request status (approve/reject)

module.exports = router;
