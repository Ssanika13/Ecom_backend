const Bag = require('../Models/BagModel');

// Get all bags
exports.getAllBags = async (req, res) => {
    try {
        const bags = await Bag.find();
        res.json(bags);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a single bag by ID
exports.getBagById = async (req, res) => {
    try {
        const bag = await Bag.findById(req.params.id);
        if (!bag) {
            return res.status(404).json({ message: 'Bag not found' });
        }
        res.json(bag);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new bag
exports.createBag = async (req, res) => {
    const { name, price, capacity, colors, brand, stock } = req.body;

    const bag = new Bag({
        name,
        price,
        capacity,
        colors,
        brand,
        stock
    });

    try {
        const newBag = await bag.save();
        res.status(201).json(newBag);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update an existing bag
exports.updateBag = async (req, res) => {
    try {
        const updatedBag = await Bag.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedBag) {
            return res.status(404).json({ message: 'Bag not found' });
        }
        res.json(updatedBag);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a bag
exports.deleteBag = async (req, res) => {
    try {
        const deletedBag = await Bag.findByIdAndDelete(req.params.id);
        if (!deletedBag) {
            return res.status(404).json({ message: 'Bag not found' });
        }
        res.json({ message: 'Bag deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
