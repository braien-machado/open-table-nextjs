export default function Form() {
  return (
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
  )
}
