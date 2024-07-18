module.exports = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const tshirtRouter = require('./Routs/TshirtsRouter');
const shoeRouter = require('./Routs/ShoeRouter');
const bottleRouter = require('./Routs/BottleRouter');
const bagRouter = require('./Routs/BagRouter');
const jacketRouter = require('./Routs/JacketRouter');
const shortsRouter = require('./Routs/ShortsRouter');


// Load environment variables
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

  
app.use(express.json());
app.use('/tshirts', tshirtRouter);
app.use('/shoes', shoeRouter);
app.use('/bottle',bottleRouter);
app.use('/bag',bagRouter);
app.use('/jacket',jacketRouter);
app.use('/shorts',shortsRouter);

app.listen(port, () => {
    console.log(`Server is running on port http://127.0.0.1:${port}`);
});