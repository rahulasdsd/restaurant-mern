const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect('', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

// Dish Schema
const dishSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
});
const Dish = mongoose.model('Dish', dishSchema);

// API Routes
app.get('/api/dishes', async (req, res) => {
  const dishes = await Dish.find();
  res.json(dishes);
});

app.post('/api/dishes', async (req, res) => {
  const dish = new Dish(req.body);
  await dish.save();
  res.json(dish);
});

app.put('/api/dishes/:id', async (req, res) => {
  const dish = await Dish.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(dish);
});

app.delete('/api/dishes/:id', async (req, res) => {
  await Dish.findByIdAndDelete(req.params.id);
  res.json({ message: 'Dish deleted' });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
