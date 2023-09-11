export default function SearchSideBar() {
  return (
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
  )
}
