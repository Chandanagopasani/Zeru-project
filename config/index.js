const express = require('express');
const connectDB = require('./config/db');
const { db } = require('../models/restaker');
require('dotenv').config();

const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes (e.g., /restakers, /validators, etc.)
app.get('/', (req, res) => {
  res.send('Zeru Backend is running!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));