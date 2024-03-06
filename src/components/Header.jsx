import { Link } from "react-router-dom";
import { GrFacebookOption, GrInstagram } from "react-icons/gr";
import { ImFlickr2 } from "react-icons/im";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <header className="py-6 bg-primary-400 bg-[url('./assets/images/bg_transparent.webp')]  bg-no-repeat bg-blend-color-burn">
        <div className="container relative flex justify-between items-center mx-auto md:flex-nowrap flex-wrap">
          <Navbar />
          <Link
            to="/"
            className="m-auto flex lg:justify-start justify-center md:order-1 order-0 w-full md:w-auto md:mb-0 mb-3"
          >
            <img
              src="/assets/images/logo.svg"
              alt="Logo"
              loading="lazy"
              className="w-[70%] sm:w-[50%] md:w-[60%] lg:w-[80%]"
            />
          </Link>
          <div className=" lg:relative  flex-wrap gap-1 items-center justify-center md:w-32 flex right-4 md:order-2 w-full order-1">
            <a href="https://www.mta.com.mt/en/home" target="_blank">
              <img
                src="/assets/images/maltatourismauthority.png"
                alt="maltaTourism-logo"
                className="w-24"
                loading="lazy"
              />
            </a>
            <a
              href="https://www.flickr.com/people/holidaysinmalta/"
              className="w-10 h-10 p-2 bg-white flex items-center justify-center rounded-md"
              target="_blank"
            >
              <ImFlickr2 className="fill-primary-600 w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/holidaysinmalta.eu"
              className="w-10 h-10 p-2 bg-white flex items-center justify-center rounded-md"
              target="_blank"
            >
              <GrInstagram className="fill-primary-600 w-5 h-5" />
            </a>
            <a
              href="https://facebook.com/holidaysinmalta.eu"
              className="w-10 h-10 p-2 bg-white flex items-center justify-center rounded-md"
              target="_blank"
            >
              <GrFacebookOption className="fill-primary-600 w-5 h-5" />
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
