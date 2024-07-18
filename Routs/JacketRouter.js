// routes/jackets.js
const express = require('express');
const router = express.Router();
const jacketController = require('../Controllers/JacketController');

// GET all jackets
router.get('/', jacketController.getAllJackets);

// GET a single jacket by ID
router.get('/:id', jacketController.getJacketById);

// POST create a new jacket
router.post('/', jacketController.createJacket);

// PUT update an existing jacket
router.patch('/:id', jacketController.updateJacket);

// DELETE delete a jacket
router.delete('/:id', jacketController.deleteJacket);

module.exports = router;
