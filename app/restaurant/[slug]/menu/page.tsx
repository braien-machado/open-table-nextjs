export default function Menu() {
  return (
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
        <div className="bg-white w-full rounded p-3 shadow">
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
          {/* MENU */}
          <main className="bg-white mt-5">
            <div>
              <div className="mt-4 pb-1 mb-1">
                <h1 className="font-bold text-4xl">Menu</h1>
              </div>
              <div className="flex flex-wrap justify-between">
                {/* MENU CARD */}
                <div className="border rounded p-3 w-[49%] mb-3">
                  <h3 className="font-bold text-lg">Surf and Turf</h3>
                  <p className="font-light mt-1 text-sm">
                    A well done steak with lobster and rice
                  </p>
                  <p className="mt-7">$80</p>
                </div>
                {/* MENU CARD */}
              </div>
            </div>
          </main>
          {/* MENU */}
        </div>
      </div>
      {/* DESCRIPTION PORTION */}
    </main>
  );
}