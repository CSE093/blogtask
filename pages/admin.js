'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const [dishes, setDishes] = useState([]);
  const [newDish, setNewDish] = useState({ name: '', price: '', image: '' });
  const router = useRouter();

  useEffect(() => {
    const saved = localStorage.getItem('topRestaurants');
    if (saved) setDishes(JSON.parse(saved));
  }, []);

  const handleAddDish = () => {
    const dish = {
      id: Date.now(),
      name: newDish.name,
      price: newDish.price,
      image: newDish.image || '/placeholder.jpg',
    };
    const updated = [...dishes, dish];
    setDishes(updated);
    localStorage.setItem('topRestaurants', JSON.stringify(updated));
    setNewDish({ name: '', price: '', image: '' });
  };

  const handleViewMenu = () => router.push('/user');
  const handleLogout = () => router.push('/login');

  return (
    <div style={{ padding: '30px' }}>
      <h1>Admin Dashboard – Create New Dishes</h1>

      <div style={{ marginTop: '20px' }}>
        <input
          placeholder="Dish Name"
          value={newDish.name}
          onChange={(e) => setNewDish({ ...newDish, name: e.target.value })}
          style={{ marginRight: '10px', padding: '6px' }}
        />
        <input
          placeholder="Price"
          value={newDish.price}
          onChange={(e) => setNewDish({ ...newDish, price: e.target.value })}
          style={{ marginRight: '10px', padding: '6px' }}
        />
        <input
          placeholder="Image URL"
          value={newDish.image}
          onChange={(e) => setNewDish({ ...newDish, image: e.target.value })}
          style={{ marginRight: '10px', padding: '6px' }}
        />

        <button
          onClick={handleAddDish}
          style={{ padding: '6px 12px', background: 'green', color: 'white', marginRight: '10px' }}
        >
          Create Dish
        </button>

        <button
          onClick={handleViewMenu}
          style={{ padding: '6px 12px', background: 'orange', color: 'white', marginRight: '10px' }}
        >
          View Menu
        </button>

        <button
          onClick={handleLogout}
          style={{ padding: '6px 12px', background: '#d9534f', color: 'white' }}
        >
          Logout
        </button>
      </div>

      <h2 style={{ marginTop: '30px' }}>Dish List</h2>
      <ul>
        {dishes.map((dish) => (
          <li key={dish.id} style={{ margin: '10px 0' }}>
            <img
              src={dish.image}
              alt={dish.name}
              style={{ width: '80px', verticalAlign: 'middle', marginRight: '10px' }}
            />
            <strong>{dish.name}</strong> – {dish.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
