import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between px-4 py-3 bg-white shadow-lg text-center">
      {/* Logo */}
      <div className="mb-2 md:mb-0">
        <h2 className="text-2xl font-bold text-gray-800">Book Vibe</h2>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex gap-6 text-gray-700 text-lg">
        <li className="list-none">
          <NavLink
            to="/"
            className={({ isActive }) => {
              return isActive ? 'bg-red-800 p-2' : 'bg-sky-700 p-2';
            }}
          >
            Home
          </NavLink>
        </li>
        <li className="list-none">
          <NavLink to="list_books" className="hover:text-teal-600">
            Listed Books
          </NavLink>
        </li>
        <li className="list-none">
          <NavLink to="/dashboard" className="hover:text-teal-600">
            Pages to Read
          </NavLink>
        </li>
      </nav>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button className="btn bg-green-600 text-white py-2 px-4 rounded-md hover:bg-teal-700">
          Sign In
        </button>
        <button className="bg-cyan-600 text-white py-2 px-4 rounded-md hover:bg-yellow-600">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
