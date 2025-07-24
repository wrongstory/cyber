import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FiHeart, FiShoppingCart } from "react-icons/fi";

export default function Navber() {
  return (
    <header className="w-full px-6 py-4 flex justify-between items-center border-b">
      <Link to="/" className="text-2xl font-bold tracking-widest">
        cyber
      </Link>

      <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg w-1/2 max-w-md">
        <FaSearch className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
        />
      </div>

      <div className="flex items-center space-x-6 text-xl">
        <FiHeart className="cursor-pointer" />
        <FiShoppingCart className="cursor-pointer" />
      </div>
    </header>
  );
}
