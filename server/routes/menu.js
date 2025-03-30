const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem');

// Get all menu items
router.get('/', async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    res.json(menuItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new menu item (for admin/testing)
router.post('/', async (req, res) => {
  const menuItem = new MenuItem({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
  });
  try {
    const newItem = await menuItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;