const Bottle = require('../Models/BottleModel');

// Get all bottles
exports.getAllBottles = async (req, res) => {
    try {
        const bottles = await Bottle.find();
        res.json(bottles);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a single bottle by ID
exports.getBottleById = async (req, res) => {
    try {
        const bottle = await Bottle.findById(req.params.id);
        if (!bottle) {
            return res.status(404).json({ message: 'Bottle not found' });
        }
        res.json(bottle);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new bottle
exports.createBottle = async (req, res) => {
    const { name, price, capacity, colors, brand, stock } = req.body;

    const bottle = new Bottle({
        name,
        price,
        capacity,
        colors,
        brand,
        stock,
        
    });

    try {
        const newBottle = await bottle.save();
        res.status(201).json(newBottle);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update an existing bottle
exports.updateBottle = async (req, res) => {
    try {
        const updatedBottle = await Bottle.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedBottle) {
            return res.status(404).json({ message: 'Bottle not found' });
        }
        res.json(updatedBottle);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a bottle
exports.deleteBottle = async (req, res) => {
    try {
        const deletedBottle = await Bottle.findByIdAndDelete(req.params.id);
        if (!deletedBottle) {
            return res.status(404).json({ message: 'Bottle not found' });
        }
        res.json({ message: 'Bottle deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
