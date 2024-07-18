const Shoe = require('../Models/ShoeModel');

// Get all shoes
exports.getAllShoes = async (req, res) => {
    try {
        const shoes = await Shoe.find();
        res.json(shoes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a single shoe by ID
exports.getShoeById = async (req, res) => {
    try {
        const shoe = await Shoe.findById(req.params.id);
        if (!shoe) {
            return res.status(404).json({ message: 'Shoe not found' });
        }
        res.json(shoe);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new shoe
exports.createShoe = async (req, res) => {
    const { name, price, size, colors, brand, stock } = req.body;

    const shoe = new Shoe({
        name,
        price,
        size,
        colors,
        brand,
        stock
    });

    try {
        const newShoe = await shoe.save();
        res.status(201).json(newShoe);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update an existing shoe
exports.updateShoe = async (req, res) => {
    try {
        const updatedShoe = await Shoe.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedShoe) {
            return res.status(404).json({ message: 'Shoe not found' });
        }
        res.json(updatedShoe);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a shoe
exports.deleteShoe = async (req, res) => {
    try {
        const deletedShoe = await Shoe.findByIdAndDelete(req.params.id);
        if (!deletedShoe) {
            return res.status(404).json({ message: 'Shoe not found' });
        }
        res.json({ message: 'Shoe deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
