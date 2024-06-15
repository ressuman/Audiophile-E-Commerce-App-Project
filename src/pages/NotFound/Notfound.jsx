import { Link } from "react-router-dom";
import NotFoundIcon from "../../assets/page_not_found.svg";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="flex flex-col items-center bg-white p-10 rounded-lg shadow-lg">
        <img src={NotFoundIcon} alt="" className="w-32 h-32 mb-4" />

        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-lg font-medium py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
