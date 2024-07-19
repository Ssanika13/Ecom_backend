const Shorts = require('../Models/ShortsModel');
const TShirt = require('../Models/TshirtsModel');


const getSportsUnifrom = async (req, res) => {
    try {
        const shorts = await Shorts.find().exec();
        const tshirts = await TShirt.find().exec();


        res.status(200).json({ shorts, tshirts, });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getSportsUnifrom,
};
