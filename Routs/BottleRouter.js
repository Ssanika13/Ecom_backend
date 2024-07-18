const express = require('express');
const router = express.Router();
const bottleController = require('../Controllers/BottleController');

// Get all bottles
router.get('/', bottleController.getAllBottles);

// Get a single bottle by ID
router.get('/:id', bottleController.getBottleById);

// Create a new bottle
router.post('/', bottleController.createBottle);

// Update an existing bottle
router.patch('/:id', bottleController.updateBottle);

// Delete a bottle
router.delete('/:id', bottleController.deleteBottle);

module.exports = router;
