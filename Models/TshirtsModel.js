const mongoose = require('mongoose');
const { Schema } = mongoose;

const tshirtSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        trim: true
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'Price cannot be negative']
    },
    size: {
        type: String,
        required: [true, 'Size is required'],
        enum: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        default: 'M'
    },
    colors: {
        type: [String],
        required: [true, 'At least one color is required'],
        enum: ['Red', 'Green', 'Blue', 'Black', 'White', 'Yellow', 'Gray', 'Pink']
    },
    material: {
        type: String,
        required: [true, 'Material is required'],
        trim: true
    },
    brand: {
        type: String,
        required: [true, 'Brand is required'],
        trim: true
    }
}, { timestamps: true });

module.exports = mongoose.model('TShirt', tshirtSchema);
