import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <div className="bg-primary-300">
        <Header />
        {children}
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
