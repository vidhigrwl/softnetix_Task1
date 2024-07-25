const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const recipeRoutes = require('./routes/recipes');
const authRoutes = require('./routes/auth');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
const mongoURI = 'mongodb+srv://vidhigrwl09:0Tlf3rbBFXzhuTpA@recipe.zgy1zxp.mongodb.net/?retryWrites=true&w=majority&appName=recipe'; // Update this with your MongoDB URI
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Basic route to test server
app.get('/', (req, res) => {
  res.send('Welcome to the Recipe Sharing Platform API!');
});

// Use routes
app.use('/api/recipes', recipeRoutes);
app.use('/api/auth', authRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

