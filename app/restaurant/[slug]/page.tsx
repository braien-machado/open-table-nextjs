import Link from 'next/link';
import NavBar from '../../components/NavBar';

export default function Restaurant() {
  return (
    <main className="max-w-screen-2xl m-auto bg-white">
      <NavBar />
      {/* HEADER */}
      <div className="h-72 overflow-hidden">
        <div className="bg-center h-full flex justify-center items-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984]">
          <h1 className="text-7xl text-white capitalize text-shadow text-center">
            Milestones Grill (Toronto)
          </h1>
        </div>
      </div>
      {/* HEADER */}
      {/* DESCRIPTION PORTION */}
      <div className="flex m-auto w-2/3 justify-between items-start -mt-11">
        <div className="bg-white w-[70%] rounded p-3 shadow">
          {/* RESTAURANT NAVBAR */}
          <nav className="flex text-base border-b pb-2">
            <Link href="/restaurant/milestones-grill" className="mr-7">
              Overview
            </Link>
            <Link href="/restaurant/milestones-grill/menu" className="mr-7">
              Menu
            </Link>
          </nav>
          {/* RESTAURANT NAVBAR */}
          {/* TITLE */}
          <div className="mt-4 border-b pb-6">
            <h1 className="font-bold text-6xl">
              Milestone Grill
            </h1>
          </div>
          {/* TITLE */}
          {/* RATINGS */}
          <div className="flex items-end">
            <div className="ratings mt-2 flex items-center">
              <p>*****</p>
              <p className="text-base ml-3">
                4.9
              </p>
            </div>
            <div>
              <p className="text-base ml-4">
                600 Reviews
              </p>
            </div>
          </div>
          {/* RATINGS */}
          {/* DESCRIPTION */}
          <div className="mt-4">
            <p className="text-lg font-light">
              Milestone Grill is open for indoor and outdoor dining
            </p>
            <p className="text-lg font-light">
              Since 1977, Milestone Grill has been New York City's best steakhouse serving USDA Prime dry-aged steaks, premium seafood and award-winning wines.
            </p>
            <p className="text-lg font-light">
              Located in Midtown Manhattan near Central Park, MOMA, Carnegie Hall, Rockefeller Center, Radio City Music Hall, and Times Square, Milestone Grill is the best steakhouse in Midtown Manhattan and New York City.
            </p>
          </div>
          {/* DESCRIPTION */}
          {/* IMAGES */}
          <div>
            <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
              7 photos
            </h1>
            <div className="flex flex-wrap">
              <img src="https://resizer.otstatic.com/v2/photos/xlarge/3/41868605.webp" alt="" className="w-56 h-44 mr-1 mb-1" />
              <img src="https://resizer.otstatic.com/v2/photos/xlarge/1/41868611.webp" alt="" className="w-56 h-44 mr-1 mb-1" />
              <img src="https://resizer.otstatic.com/v2/photos/xlarge/1/41868618.webp" alt="" className="w-56 h-44 mr-1 mb-1" />
              <img src="https://resizer.otstatic.com/v2/photos/xlarge/1/41868612.webp" alt="" className="w-56 h-44 mr-1 mb-1" />
              <img src="https://resizer.otstatic.com/v2/photos/xlarge/25722395.webp" alt="" className="w-56 h-44 mr-1 mb-1" />
            </div>
          </div>
          {/* IMAGES */}
          {/* REVIEWS */}
          <div>
            <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
              What 100 people are saying
            </h1>
            <div>
              {/* REVIEW CARD */}
              <div className="border-b pb-7 mb-7">
                <div className="flex">
                  <div className="w-1/6 flex flex-col items-center">
                    <div className="rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center">
                      <h2 className="text-white text-2xl">
                        MJ
                      </h2>
                    </div>
                    <p className="text-center">Michael Jordan</p>
                  </div>
                  <div className="ml-10 w-5/6">
                    <div className="flex items-center">
                      <div className="flex mr-5">
                        *****
                      </div>
                    </div>
                    <div className="mt-5">
                      <p className="text-lg font-light">
                        Es war nach einem New York Yankee Spiel sehr laut und mehrere betrunkene Gäste. Das Fleisch war allerdings exzellent und sehr Service aufmerksam
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* REVIEW CARD */}
            </div>
          </div>
          {/* REVIEWS */}
        </div>
        {/* RESERVATION CARD PORTION */}
        <div className="w-[27%] relative text-base">
          <div className="fixed w-[30%] bg-white rounded p-3 shadow">
            <div className="text-center border-b pb-2 font-bold">
              <h4 className="mr-7 text-lg">Make a Reservation</h4>
            </div>
            <div className="my-3 flex flex-col">
              <label htmlFor="">Party size</label>
              <select name="" id="" className="py-3 border-b font-light">
                <option value="">1 person</option>
                <option value="">2 people</option>
              </select>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col w-[48%]">
                <label htmlFor="">Date</label>
                <input type="text" className="py-3 border-b font-light w-28" />
              </div>
              <div className="flex flex-col w-[48%]">
                <label htmlFor="">Time</label>
                <select name="" id="" className="py-3 border-b font-light w-28">
                  <option value="">7:30 AM</option>
                  <option value="">9:30 AM</option>
                </select>
              </div>
            </div>
            <div className="mt-5">
              <button className="bg-red-600 rounded w-full px-4 text-white font-bold h-16">Find a Time</button>
            </div>
          </div>
          {/* RESERVATION CARD PORTION */}
        </div>
      </div>
      {/* DESCRIPTION PORTION */}
    </main>
  );
}