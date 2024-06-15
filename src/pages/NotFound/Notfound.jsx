import { Link } from "react-router-dom";
import NotFoundIcon from "../../assets/page_not_found.svg";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-peru via-chinese-black to-tangelo">
      <div className="flex flex-col items-center bg-black p-10 rounded-lg shadow-lg">
        <img src={NotFoundIcon} alt="" className="w-32 h-32 mb-4" />

        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <p className="text-xl text-flash-white mb-8">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          to="/"
          className="text-white bg-peru hover:bg-tangelo focus:outline-none focus:ring-2 focus:ring-peru focus:ring-opacity-50 text-lg font-medium py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 uppercase"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
