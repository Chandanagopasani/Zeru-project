const express = require('express');
const connectDB = require('./config/db');
const { db } = require('../models/restaker');
require('dotenv').config();

const app = express();
app.use(express.json());

connectDB();

app.get('/', (req, res) => {
  res.send('Zeru Backend is running!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
