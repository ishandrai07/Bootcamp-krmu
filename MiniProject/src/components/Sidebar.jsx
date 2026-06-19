import { Link } from "react-router-dom";
import {
  FaCube,
  FaChartBar,
  FaCog,
  FaSave,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="w-72 bg-slate-900 border-r border-slate-800 min-h-screen p-6">

      <h1 className="text-2xl font-bold mb-10">
        Product Studio
      </h1>

      <nav className="space-y-4">

        <Link
          to="/dashboard"
          className="block p-3 rounded-lg hover:bg-slate-800"
        >
          <FaCube className="inline mr-2" />
          Dashboard
        </Link>

        <Link
          to="/analytics"
          className="block p-3 rounded-lg hover:bg-slate-800"
        >
          <FaChartBar className="inline mr-2" />
          Analytics
        </Link>

        <Link
          to="/saved"
          className="block p-3 rounded-lg hover:bg-slate-800"
        >
          <FaSave className="inline mr-2" />
          Saved
        </Link>

        <Link
          to="/settings"
          className="block p-3 rounded-lg hover:bg-slate-800"
        >
          <FaCog className="inline mr-2" />
          Settings
        </Link>

      </nav>
    </aside>
  );
};

export default Sidebar;