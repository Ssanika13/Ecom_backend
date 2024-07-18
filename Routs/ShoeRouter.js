const express = require('express');
const router = express.Router();
const shoesController = require('../Controllers/ShoeController');

// Get all shoes
router.get('/', shoesController.getAllShoes);

// Get a single shoe by ID
router.get('/:id', shoesController.getShoeById);

// Create a new shoe
router.post('/', shoesController.createShoe);

// Update an existing shoe
router.patch('/:id', shoesController.updateShoe);

// Delete a shoe
router.delete('/:id', shoesController.deleteShoe);

module.exports = router;
