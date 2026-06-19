import { Link } from "react-router-dom";
import { FaCube } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <div className="flex items-center gap-2 text-2xl font-bold">
          <FaCube />
          PCS
        </div>

        <div className="flex gap-6 items-center">
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/analytics">Analytics</Link>
          <ThemeToggle />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;