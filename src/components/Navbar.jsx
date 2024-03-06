import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar md:order-0 order-1">
        <ul className="flex gap-6">
          <li className="text-xl font-medium hover:font-semibold text-black hover:text-primary-600">
            {/* <a href="#">Home</a> */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-primary-600 font-semibold" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li className="text-xl text-black font-medium hover:font-semibold hover:text-primary-600">
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? "text-primary-600 font-semibold" : ""
              }
            >
              Blogs
            </NavLink>
          </li>
          <li className="text-xl text-black font-medium hover:font-semibold hover:text-primary-600">
            <a
              href="#contact"
              className={({ isActive }) =>
                isActive ? "text-primary-600 font-semibold" : ""
              }
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
