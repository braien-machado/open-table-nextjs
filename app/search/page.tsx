import Link from 'next/link';
import NavBar from '../components/NavBar';

export default function Search() {
  return (
    <main className="max-w-screen-2xl m-auto bg-white">
      <NavBar />
      {/* HEADER */}
      <div className="bg-gradient-to-r to-[#5f6984] from-[#0f1f47] p-2">
        {/* SEARCHBAR */}
        <div className="text-left py-3 m-auto flex justify-center">
          <input type="text" className="rounded text-lg mr-3 p-2 w-[450px]" placeholder="State, city or town" />
          <button type="button" className="bg-red-600 px-9 py-2 text-white rounded">
            Let's go
          </button>
        </div>
        {/* SEARCHBAR */}
      </div>
      {/* HEADER */}
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        {/* SEARCH SIDEBAR */}
        <div className="w-1/5">
          <div className="border-b pb-4">
            <h1 className="mb-2">Region</h1>
            <p className="font-light text-base">Toronto</p>
            <p className="font-light text-base">Ottawa</p>
            <p className="font-light text-base">Montreal</p>
            <p className="font-light text-base">Hamilton</p>
            <p className="font-light text-base">Kingston</p>
            <p className="font-light text-base">Niagara</p>
          </div>
          <div className="border-b pb-4 mt-3">
            <h1 className="mb-2">Cuisine</h1>
            <p className="font-light text-base">Mexican</p>
            <p className="font-light text-base">Italian</p>
            <p className="font-light text-base">Chinese</p>
          </div>
          <div className="mt-3 pb-4">
            <h1 className="mb-2">Price</h1>
            <div className="flex">
              <button className="border w-full text-base font-light rounded-l p-2">
                $
              </button>
              <button className="border border-l-0 w-full text-base font-light p-2">
                $$
              </button>
              <button className="border border-l-0 w-full text-base font-light rounded-r p-2">
                $$$
              </button>
            </div>
          </div>
        </div>
        {/* SEARCH SIDEBAR */}
        <div className="w-5/6">
          {/* RESTAURANT CARD */}
          <div className="border-b flex pb-5">
            <img src="https://resizer.otstatic.com/v2/photos/wide-huge/5/27687248.webp" alt="" className="w-44 rounded" />
            <div className="pl-5">
              <h2 className="text-3xl">Wollensky Grill</h2>
              <div className="flex items-start">
                <div className="flex mb-2">*****</div>
                <p className="ml-2 text-sm">Awesome</p>
              </div>
              <div className="mb-9">
                <div className="font-light flex text-base">
                  <p className="mr-4">$$$</p>
                  <p className="mr-4">Mexican</p>
                  <p className="mr-4">Ottawa</p>
                </div>
              </div>
              <div className="text-red-600">
                <Link href="">View more information</Link>
              </div>
            </div>
          </div>
          {/* RESTAURANT CARD */}
        </div>
      </div>
    </main>
  );
}