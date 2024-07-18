// controllers/jacketController.js
const Jacket = require('../Models/JacketModel');

// Get all jackets
exports.getAllJackets = async (req, res) => {
    try {
        const jackets = await Jacket.find();
        res.json(jackets);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a single jacket by ID
exports.getJacketById = async (req, res) => {
    try {
        const jacket = await Jacket.findById(req.params.id);
        if (!jacket) {
            return res.status(404).json({ message: 'Jacket not found' });
        }
        res.json(jacket);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new jacket
exports.createJacket = async (req, res) => {
    const { name, price, size, colors, brand, stock } = req.body;

    const jacket = new Jacket({
        name,
        price,
        size,
        colors,
        brand,
        stock
    });

    try {
        const newJacket = await jacket.save();
        res.status(201).json(newJacket);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update an existing jacket
exports.updateJacket = async (req, res) => {
    try {
        const updatedJacket = await Jacket.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedJacket) {
            return res.status(404).json({ message: 'Jacket not found' });
        }
        res.json(updatedJacket);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a jacket
exports.deleteJacket = async (req, res) => {
    try {
        const deletedJacket = await Jacket.findByIdAndDelete(req.params.id);
        if (!deletedJacket) {
            return res.status(404).json({ message: 'Jacket not found' });
        }
        res.json({ message: 'Jacket deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
