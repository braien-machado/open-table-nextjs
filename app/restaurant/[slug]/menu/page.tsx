import Menu from '../components/Menu';
import RestaurantNavBar from '../components/RestaurantNavBar';

export default function RestaurantMenu() {
  return (
    <div className="bg-white w-full rounded p-3 shadow">
      <RestaurantNavBar />
      <Menu />
    </div>
  );
}
