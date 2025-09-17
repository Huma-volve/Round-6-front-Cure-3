import { Outlet } from "react-router-dom";
import Footer from "../Common/Footer";
import Navbar from "../Common/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="m-auto w-full max-w-[1240px] px-4">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
