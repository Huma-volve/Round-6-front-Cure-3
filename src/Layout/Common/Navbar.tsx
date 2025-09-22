
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Bell, Search } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import logo from "@/assets/icons/logo.png";
//import { UserContext } from "@/context/UserContext";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  //const { user } = useContext(UserContext); //

  return (
    <nav className="w-full shadow-sm bg-white">
      <div className="max-w-[1240px] mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-8" />
        </div>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-medium transition-colors ${
                isActive ? "text-[#145DB8]" : "text-gray-700 hover:text-primary"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/bookings"
            className={({ isActive }) =>
              `font-medium transition-colors ${
                isActive ? "text-[#145DB8]" : "text-gray-700 hover:text-primary"
              }`
            }
          >
            Bookings
          </NavLink>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <button onClick={() => navigate("/search")}>
            <Search className="w-5 h-5 text-gray-700 hover:text-primary" />
          </button>

          {/* Notifications */}
          <button onClick={() => navigate("/notifications")}>
            <Bell className="w-5 h-5 text-gray-700 hover:text-primary" />
          </button>

          {/* Profile */}
          <Avatar
            className="w-8 h-8 cursor-pointer"
            onClick={() => navigate("/profile")}
          >
            <AvatarImage src={"https://i.pravatar.cc/100"} alt={"User"} />
          </Avatar>

          {/* Mobile burger */}
          <div className="flex md:hidden items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X className="w-6 h-6 text-gray-800" />
              ) : (
                <Menu className="w-6 h-6 text-gray-800" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="fixed top-0 right-0 h-full w-1/2 bg-white flex flex-col items-start gap-6 z-50 md:hidden shadow-lg p-6 py-15">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4"
          >
            <X className="w-6 h-6 text-gray-800" />
          </button>

          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="text-gray-800 text-lg font-semibold hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            to="/bookings"
            onClick={() => setIsOpen(false)}
            className="text-gray-800 text-lg font-semibold hover:text-primary transition-colors"
          >
            Bookings
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
