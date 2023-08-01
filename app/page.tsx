export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* NAVBAR */}
        <nav className="bg-white p-2 flex justify-between">
          <a href="" className="font-bold text-gray-700 text-2xl">
            OpenTable
          </a>
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
        {/* HEADER */}
        <div className="h-96 overflow-hidden">
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
              <a href="" className="mr-7">
                Overview
              </a>
              <a href="" className="mr-7">
                Menu
              </a>
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
          </div>
        </div>
        {/* DESCRIPTION PORTION */}
        </main>
    </main>

  )
}
