import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import { topRestaurants, deliveryRestaurants } from '../../data/restaurants';

export default function RestaurantPage() {
  const router = useRouter();
  const { id } = router.query;

  const all = [...topRestaurants, ...deliveryRestaurants];
  const restaurant = all.find((r) => r.id === parseInt(id));

  if (!restaurant) {
    return <div style={{ padding: '20px' }}>Blog post not found</div>;
  }

  return (
    <>
      <Navbar />
      <div style={{ padding: '40px', maxWidth: '800px', margin: 'auto', backgroundColor: '#fff8f0', borderRadius: '12px' }}>
        <img
          src={restaurant.image}
          alt={restaurant.name}
          style={{
            width: '100%',
            height: '400px',
            objectFit: 'cover',
            borderRadius: '10px',
            marginBottom: '20px',
          }}
        />
        <h1 style={{ fontSize: '32px', marginBottom: '10px', color: '#d2691e' }}>{restaurant.name}</h1>
        
        <p style={{ fontSize: '18px', color: '#555' }}>
          {restaurant.desc || "A flavorful experience waiting to be discovered. Whether it's crispy textures or rich gravies, this dish is a favorite among foodies."}
        </p>

        {restaurant.price && (
          <p style={{ marginTop: '10px', fontWeight: 'bold', fontSize: '16px' }}>{restaurant.price}</p>
        )}

        {restaurant.rating && restaurant.preparationTime && (
          <p style={{ color: '#4caf50', fontSize: '15px', marginTop: '10px' }}>
            {restaurant.rating} · {restaurant.preparationTime}
          </p>
        )}

        <div style={{ marginTop: '30px' }}>
          <h2 style={{ fontSize: '22px', marginBottom: '10px' }}>🍴 What Makes It Special?</h2>
          <p style={{ color: '#333', lineHeight: '1.6' }}>
            Dive into a gastronomic journey with <strong>{restaurant.name}</strong>. Known for its authentic ingredients, balanced spices, and mouth-watering flavors, this dish has earned a place in our food blog for a reason. Whether you're enjoying it at home or in a restaurant, it's bound to leave you craving more.
          </p>
        </div>

        <div style={{ marginTop: '30px' }}>
          <h2 style={{ fontSize: '22px', marginBottom: '10px' }}>Blog Notes</h2>
          <ul style={{ color: '#444', paddingLeft: '20px' }}>
            <li>Great for weekend meals or celebrations.</li>
            <li>Pairs well with naan, rice, or chilled beverages.</li>
            <li>Can be spicy, creamy, or tangy — depending on the variant.</li>
          </ul>
        </div>
      </div>
    </>
  );
}
