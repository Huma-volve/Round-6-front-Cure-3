import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import LaunchScreen from "../LaunchScreen/LaunchScreen";
import Navbar from "./Navbar";

const Layout = () => {
  const [showLaunch, setShowLaunch] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLaunch(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-dark-1">
      {/* Launch Screen */}
      <div 
        className={`fixed inset-0 transition-opacity duration-500 z-50 ${
          showLaunch ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <LaunchScreen />
      </div>
      
      {/* Main Content */}
      <div className={`transition-opacity duration-500 ${
        showLaunch ? 'opacity-0' : 'opacity-100'
      }`}>
        
        {/* Navbar */}
        <div className="sticky top-0 z-40 bg-dark-2 border-b border-gray-800">
          <Navbar />
        </div>

        {/* Page Content */}
        <div className="m-auto w-full max-w-[1240px] px-4 py-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;