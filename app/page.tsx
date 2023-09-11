"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import NavBar from './components/NavBar';

export default function Home() {
  const router = useRouter();
  const [location, setLocation] = useState("");

  return (
    <main className="bg-gray-100 min-h-screen w-full">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar />
        <main>
          {/* HEADER */}
          <div className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
            <div className="text-center mt-10">
              <h1 className="text-white text-2xl font-bold mb-2">
                Find your table for any occasion
              </h1>
              {/* SEARCHBAR */}
              <div className="text-left py-3 m-auto flex justify-center">
                <input
                  type="text"
                  className="rounded text-lg mr-3 p-2 w-[450px]"
                  placeholder="State, city or town"
                  onChange={(e) => setLocation(e.target.value)}
                />
                <button
                  type="button"
                  className="bg-red-600 px-9 py-2 text-white rounded"
                  onClick={() => router.push(`/search/${location}`)}
                >
                  Let's go
                </button>
              </div>
              {/* SEARCHBAR */}
            </div>
          </div>
          {/* HEADER */}
          {/* CARDS */}
          <div className="py-3 px-36 mt-10 flex flex-wrap">
            {/* CARD */}
            <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
              <Link href="/restaurant/milestones-grill">
                <img
                  src="https://resizer.otstatic.com/v2/photos/legacy/3/25817615.jpg"
                  alt=""
                  className="w-full h-36"
                  />
                <div className="p-1">
                  <h3 className="font-bold text-2xl mb-2">
                    Milestones Grill
                  </h3>
                  <div className="flex items-start">
                    <div className="flex mb-2">
                      *****
                    </div>
                    <p className="ml-2">
                      77 reviews
                    </p>
                  </div>
                  <div className="flex text-base font-light capitalize">
                    <p className="mr-3">
                      Mexican
                    </p>
                    <p className="mr-3">$$$$</p>
                    <p>Toronto</p>
                  </div>
                  <p className="text-sm mt-1 font-bold">
                    Booked 3 times today
                  </p>
                </div>
              </Link>
            </div>
            {/* CARD */}
          </div>
          {/* CARDS */}
        </main>
      </main>
    </main>
  );
}
