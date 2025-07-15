import Navbar from '../components/Navbar';
import RestaurantList from '../components/RestaurantList';

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '20px 40px' }}>
        <RestaurantList section="top" />
        <RestaurantList section="delivery" />
      </main>
    </>
  );
}
