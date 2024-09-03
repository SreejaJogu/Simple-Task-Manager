const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to database
connectDB();
//connectToDatabase();

// Initialize the app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/tasks', require('./routes/taskRotue'));
app.use('/api/tasks', require('./controllers/taskController'));
app.use('/api/tasks', require('./models/task'));

// Root route
app.get('/', (req, res) => {
  res.send('Simple Task Manager');
});

// Start the server
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
