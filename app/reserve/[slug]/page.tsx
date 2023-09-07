import Link from 'next/link';

export default function Reserve() {
  return (
    <main className="max-w-screen-2xl m-auto bg-white">
      {/* NAVBAR */}
      <nav className="bg-white p-2 flex justify-between">
        <Link href="/" className="font-bold text-gray-700 text-2xl">
          OpenTable
        </Link>
        <div>
          <div className="flex">
            <button type="button" className="bg-blue-400 text-white border px-4 py-1 rounded mr-3">
              Sign in
            </button>
            <button type="button" className="border px-4 py-1 rounded">
              Sign up
            </button>
          </div>
        </div>
      </nav>
      {/* NAVBAR */}
      <div className="border-t h-screen">
        <div className="py-9 w-3/5 m-auto">
          {/* HEADER */}
          <div>
            <h3 className="font-bold">You're almost done!</h3>
            <div className="mt-5 flex">
              <img src="https://resizer.otstatic.com/v2/photos/wide-huge/5/27687248.webp" alt="" className="w-32 h-18 rounded" />
              <div className="ml-4">
                <h1 className="text-3xl font-bold">
                  Aiãna Resturant Collective
                </h1>
                <div className="flex mt-3">
                  <p className="mr-6">Tues, 22, 2023</p>
                  <p className="mr-6">7:30 PM</p>
                  <p className="mr-6">3 people</p>
                </div>
              </div>
            </div>
          </div>
          {/* HEADER */}
          {/* FORM */}
          <div className="mt-10 flex flex-wrap justify-between w-[660px]">
            <input
              className="border rounded p-3 w-80 mb-4"
              placeholder="First name"
              type="text"
            />
            <input
              className="border rounded p-3 w-80 mb-4"
              placeholder="Last name"
              type="text"
            />
            <input
              className="border rounded p-3 w-80 mb-4"
              placeholder="Phone number"
              type="text"
            />
            <input
              className="border rounded p-3 w-80 mb-4"
              placeholder="Email"
              type="text"
            />
            <input
              className="border rounded p-3 w-80 mb-4"
              placeholder="First name"
              type="Occasion (optional)"
            />
            <input
              className="border rounded p-3 w-80 mb-4"
              placeholder="First name"
              type="Requests (optional)"
            />
            <button className="bg-red-600 w-full p-3 text-white font-bold rounded disabled:bg-gray-300">
              Complete reservation
            </button>
            <p className="mt-4 text-sm">
              By clicking “Complete reservation” you agree to the OpenTable Terms of Use and Privacy Policy. Message & data rates may apply. You can opt out of receiving text messages at any time in your account settings or by replying STOP.
            </p>
          </div>
          {/* FORM */}
        </div>
      </div>
    </main>
  );
}