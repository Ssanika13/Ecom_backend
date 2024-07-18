const express = require('express');
const router = express.Router();
const tshirtController = require('../Controllers/TshirtsController');

// Get all T-shirts
router.get('/', tshirtController.getAllTShirts);

// Get a single T-shirt by ID
router.get('/:id', tshirtController.getTShirtById);

// Create a new T-shirt
router.post('/', tshirtController.createTShirt);

// Update an existing T-shirt
router.patch('/:id', tshirtController.updateTShirt);

// Delete a T-shirt
router.delete('/:id', tshirtController.deleteTShirt);

module.exports = router;
