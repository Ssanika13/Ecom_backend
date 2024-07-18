const express = require('express');
const router = express.Router();
const bagController = require('../Controllers/BagController');

// Get all bags
router.get('/', bagController.getAllBags);

// Get a single bag by ID
router.get('/:id', bagController.getBagById);

// Create a new bag
router.post('/', bagController.createBag);

// Update an existing bag
router.patch('/:id', bagController.updateBag);

// Delete a bag
router.delete('/:id', bagController.deleteBag);

module.exports = router;
