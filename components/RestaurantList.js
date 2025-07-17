import Link from 'next/link';
import Image from 'next/image';
import { topRestaurants, deliveryRestaurants } from '../data/restaurants';

export default function RestaurantList({ section }) {
  
  const restaurants = section === 'top' ? topRestaurants : deliveryRestaurants;

  return (
    <section style={{ margin: '40px 0' }}>
      <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>
        {section === 'top' ? 'Top Picks' : 'Delivery Favorites'}
      </h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {restaurants.map((r) => (
          <Link key={r.id} href={`/restaurant/${r.id}`} passHref>
            <div
              style={{
                width: '300px',
                border: '1px solid #ccc',
                borderRadius: '12px',
                padding: '16px',
                textDecoration: 'none',
                backgroundColor: '#fff',
              }}
            >
              <Image
                src={r.image}
                alt={r.name}
                width={300}
                height={200}
                style={{ borderRadius: '8px' }}
              />
              <h3 style={{ marginTop: '10px' }}>{r.name}</h3>
              {/* Use r.desc or r.description depending on the data */}
              <p style={{ fontSize: '14px', color: '#555' }}>
                {r.desc || r.description || ''}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
