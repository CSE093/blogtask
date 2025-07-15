'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { deliveryRestaurants, topRestaurants as defaultTop } from '../data/restaurants';
import './RestaurantList.css';

const RestaurantList = ({ section }) => {
  const [topRestaurants, setTopRestaurants] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem('topRestaurants');
    let finalTop = defaultTop;

    if (stored) {
      const added = JSON.parse(stored);
      const isDuplicate = (d) =>
        defaultTop.some((item) => item.name === d.name && item.image === d.image);
      const newItems = added.filter((d) => !isDuplicate(d));
      finalTop = [...defaultTop, ...newItems];
    }

    setTopRestaurants(finalTop);
    setIsAdmin(localStorage.getItem('isAdmin') === 'true');
  }, []);

  const handleDelete = (id) => {
    const updated = topRestaurants.filter((d) => d.id !== id);
    setTopRestaurants(updated);
    localStorage.setItem('topRestaurants', JSON.stringify(updated));
  };

  const handleUpdate = (id) => {
    router.push(`/update/${id}`);
  };

  const handleCreate = () => {
    router.push('/admin');
  };

  const data = section === 'top' ? topRestaurants : deliveryRestaurants;

  return (
    <div className="card-grid">
      {data.map((r) => (
        <div key={r.id} style={{ position: 'relative' }}>
          <Link href={`/restaurant/${r.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="card">
              <img src={r.image} alt={r.name} />
              <h3>{r.name}</h3>
              {r.desc && <p>{r.desc}</p>}
              {r.price && <p>{r.price}</p>}
              {r.rating && <p>{r.rating} | {r.preparationTime}</p>}
            </div>
          </Link>

          {isAdmin && section === 'top' && (
            <div style={{ marginTop: '10px', textAlign: 'center' }}>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleUpdate(r.id);
                }}
                style={buttonStyle}
              >
                Update
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(r.id);
                }}
                style={{ ...buttonStyle, backgroundColor: 'crimson' }}
              >
                Delete
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleCreate();
                }}
                style={{ ...buttonStyle, backgroundColor: 'green' }}
              >
                Create
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const buttonStyle = {
  margin: '5px',
  padding: '6px 12px',
  backgroundColor: 'orange',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default RestaurantList;
