import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar md:order-[0]  order-2 md:w-auto w-full md:mt-0 mt-6">
        <ul className="flex gap-6 md:justify-start justify-center">
          <li className="text-xl md:text-lg font-medium hover:font-semibold text-black hover:text-primary-600">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-primary-600 font-semibold" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li className="text-xl md:text-lg text-black font-medium hover:font-semibold hover:text-primary-600">
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? "text-primary-600 font-semibold" : ""
              }
            >
              Blogs
            </NavLink>
          </li>
          <li className="text-xl md:text-lg text-black font-medium hover:font-semibold hover:text-primary-600">
            <a href="#contact" className="">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
