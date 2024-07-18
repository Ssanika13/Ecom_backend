// controllers/shortsController.js
const Shorts = require('../Models/ShortsModel');

// Get all shorts
exports.getAllShorts = async (req, res) => {
    try {
        const shorts = await Shorts.find();
        res.json(shorts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a single shorts by ID
exports.getShortsById = async (req, res) => {
    try {
        const shorts = await Shorts.findById(req.params.id);
        if (!shorts) {
            return res.status(404).json({ message: 'Shorts not found' });
        }
        res.json(shorts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new shorts
exports.createShorts = async (req, res) => {
    const { name, price, size, colors, material, brand, stock } = req.body;

    const shorts = new Shorts({
        name,
        price,
        size,
        colors,
        material,
        brand,
        stock
    });

    try {
        const newShorts = await shorts.save();
        res.status(201).json(newShorts);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update an existing shorts
exports.updateShorts = async (req, res) => {
    try {
        const updatedShorts = await Shorts.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedShorts) {
            return res.status(404).json({ message: 'Shorts not found' });
        }
        res.json(updatedShorts);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a shorts
exports.deleteShorts = async (req, res) => {
    try {
        const deletedShorts = await Shorts.findByIdAndDelete(req.params.id);
        if (!deletedShorts) {
            return res.status(404).json({ message: 'Shorts not found' });
        }
        res.json({ message: 'Shorts deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
