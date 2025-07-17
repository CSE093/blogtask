import { useRouter } from 'next/router';
import { topRestaurants, deliveryRestaurants } from '../../data/restaurants';
import Navbar from '../../components/Navbar';
import Image from 'next/image';

export default function RestaurantDetail() {
  const router = useRouter();
  const { id } = router.query;

  const allRestaurants = [...topRestaurants, ...deliveryRestaurants];
  const restaurant = allRestaurants.find((r) => r.id.toString() === id);

  if (!restaurant) return <p>Restaurant not found</p>;

  return (
    <>
      <Navbar />
      <main style={{ padding: '40px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold' }}>{restaurant.name}</h1>
        <Image
          src={restaurant.image}
          alt={restaurant.name}
          width={600}
          height={400}
          style={{ borderRadius: '16px', margin: '20px 0' }}
        />
        <p style={{ fontSize: '18px', color: '#555' }}>
          {restaurant.desc ||
            "A flavorful experience waiting to be discovered. Whether it&#39;s crispy textures or rich gravies, this dish is a favorite among foodies."}
        </p>

        <div style={{ marginTop: '40px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>What Makes It Special?</h2>
          <p style={{ color: '#333', lineHeight: '1.6' }}>
            Dive into a gastronomic journey with <strong>{restaurant.name}</strong>. Known for its authentic ingredients,
            balanced spices, and mouth-watering flavors, this dish has earned a place in our food blog for a reason.
            Whether you&#39;re enjoying it at home or in a restaurant, it&#39;s bound to leave you craving more.
          </p>
        </div>
      </main>
    </>
  );
}
