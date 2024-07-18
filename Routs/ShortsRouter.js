// routes/shorts.js
const express = require('express');
const router = express.Router();
const shortsController = require('../Controllers/ShortsController');

// GET all shorts
router.get('/', shortsController.getAllShorts);

// GET a single shorts by ID
router.get('/:id', shortsController.getShortsById);

// POST create a new shorts
router.post('/', shortsController.createShorts);

// PUT update an existing shorts
router.patch('/:id', shortsController.updateShorts);

// DELETE delete a shorts
router.delete('/:id', shortsController.deleteShorts);

module.exports = router;
