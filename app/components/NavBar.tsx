import Link from 'next/link';

export default function NavBar() {
  return (
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
  )
}
