import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';


function About() {
  const [dishes, setDishes] = useState([]);
  const [newDish, setNewDish] = useState({ name: '', price: '', description: '' });

  // Fetch dishes
  useEffect(() => {
    axios.get('https://restaurant-mern-1-backend.onrender.com/api/dishes')
      .then(res => setDishes(res.data))
      .catch(err => console.log(err));
  }, []);

  // Add dish
  const addDish = () => {
    axios.post('https://restaurant-mern-1-backend.onrender.com/api/dishes', newDish)
      .then(res => setDishes([...dishes, res.data]))
      .catch(err => console.log(err));
    setNewDish({ name: '', price: '', description: '' });
  };

  // Delete dish
  const deleteDish = (id) => {
    axios.delete(`https://restaurant-mern-1-backend.onrender.com/api/dishes/${id}`)
      .then(() => setDishes(dishes.filter(dish => dish._id !== id)))
      .catch(err => console.log(err));
  };

  return (
    <div className="Order">
      
      <h1>Restaurant Menu</h1>
      <div>
        <input
          placeholder="Dish Name"
          value={newDish.name}
          onChange={(e) => setNewDish({ ...newDish, name: e.target.value })}
        />
        <input
          placeholder="Price"
          value={newDish.price}
          onChange={(e) => setNewDish({ ...newDish, price: e.target.value })}
        />
        <input
          placeholder="Description"
          value={newDish.description}
          onChange={(e) => setNewDish({ ...newDish, description: e.target.value })}
        />
        <button onClick={addDish}>Add Dish</button>
      </div>
      <ul>
        {dishes.map(dish => (
          <li key={dish._id}>
            {dish.name} - ${dish.price} - {dish.description}
            <button onClick={() => deleteDish(dish._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default About;
