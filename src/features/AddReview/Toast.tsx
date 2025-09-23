import { NavLink } from "react-router-dom"

const Toast = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-4xl shadow-lg p-6 w-[70%] h-1/2 flex flex-col justify-end max-w-sm text-center">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Thanks for your review
        </h2>
        <NavLink to={"/"}>
        <button className="w-full bg-[#0a1a2f] text-white py-3 rounded-full font-medium hover:bg-[#132742] transition">
          Done
        </button>
        </NavLink>
        <p className="mt-3 text-sm text-gray-500 cursor-pointer hover:underline">
          Back to Home
        </p>
      </div>
    </div>
  )
}

export default Toast
