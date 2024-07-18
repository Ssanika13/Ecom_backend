const TShirt = require('../Models/TshirtsModel');

// Get all T-shirts
exports.getAllTShirts = async (req, res) => {
    try {
        const tShirts = await TShirt.find();
        res.json(tShirts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a single T-shirt by ID
exports.getTShirtById = async (req, res) => {
    try {
        const tShirt = await TShirt.findById(req.params.id);
        if (!tShirt) {
            return res.status(404).json({ message: 'T-shirt not found' });
        }
        res.json(tShirt);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new T-shirt
exports.createTShirt = async (req, res) => {
    const { name, description, price, size, colors, material, brand } = req.body;

    const tShirt = new TShirt({
        name,
        description,
        price,
        size,
        colors,
        material,
        brand
    });

    try {
        const newTShirt = await tShirt.save();
        res.status(201).json(newTShirt);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update an existing T-shirt
exports.updateTShirt = async (req, res) => {
    try {
        const updatedTShirt = await TShirt.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedTShirt) {
            return res.status(404).json({ message: 'T-shirt not found' });
        }
        res.json(updatedTShirt);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a T-shirt
exports.deleteTShirt = async (req, res) => {
    try {
        const deletedTShirt = await TShirt.findByIdAndDelete(req.params.id);
        if (!deletedTShirt) {
            return res.status(404).json({ message: 'T-shirt not found' });
        }
        res.json({ message: 'T-shirt deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
