import { FlickerIcon, InstagramIcon } from "./IconSvg";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <header className="py-6 bg-primary-400 bg-[url('./assets/bg_transparent.png')]  bg-no-repeat bg-blend-color-burn">
        <div className="container relative flex justify-between items-center mx-auto md:flex-nowrap flex-wrap">
          <Navbar />
          <div className="m-auto flex lg:justify-start justify-center md:order-1 order-0 w-full md:w-auto mb-3">
            <img
              src="/assets/logo.svg"
              alt="Logo"
              className="w-[70%] sm:w-[50%] md:w-[60%] lg:w-[80%]"
            />
          </div>
          <div className="lg:ml-auto lg:absolute relative flex-wrap gap-1 items-center justify-end w-32 flex right-4 md:order-2 order-2">
            <a href="https://www.mta.com.mt/en/home">
              <img
                src="/assets/maltatourismauthority.png"
                alt="maltaTourism-logo"
                className="w-24"
              />
            </a>
            <a href="https://www.flickr.com/people/holidaysinmalta/">
              <FlickerIcon />
            </a>
            <a href="https://www.instagram.com/holidaysinmalta.eu">
              <InstagramIcon className="fill-primary-600" />
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
