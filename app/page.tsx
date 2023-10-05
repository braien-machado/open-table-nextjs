import { PrismaClient, Cuisine, PRICE, Location } from '@prisma/client';

import Header from './components/Header';
import RestaurantCard from './components/RestaurantCard';

export type RestaurantCardType = {
  cuisine: Cuisine;
  id: number;
  location: Location;
  main_image: string;
  name: string;
  price: PRICE;
  slug: string;
}

const prisma = new PrismaClient();

const fetchRestaurants = async (): Promise<RestaurantCardType[]> => prisma
  .restaurant.findMany({
    select: {
      cuisine: true,
      id: true,
      location: true,
      main_image: true,
      name: true,
      price: true,
      slug: true,
    }
  });

export default async function Home() {
  const restaurants = await fetchRestaurants();

  return (
    <main>
      <Header />
      <div className="py-3 px-36 mt-10 flex flex-wrap">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </main>
  );
}
