import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="m-auto w-full max-w-[1240px] px-4">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
