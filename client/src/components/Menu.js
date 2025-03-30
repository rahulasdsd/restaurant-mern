import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/menu')
      .then(res => setMenuItems(res.data))
      .catch(err => console.log(err));
  }, []);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div>
      <h1>Restaurant Menu</h1>
      <div>
        {menuItems.map(item => (
          <div key={item._id}>
            <h3>{item.name} - ${item.price}</h3>
            <p>{item.description}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.name} - ${item.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;