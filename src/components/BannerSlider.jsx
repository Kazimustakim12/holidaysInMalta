import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Grid, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import PropsTypes from "prop-types";

const BannerSlider = ({ imagesArray = [], loading }) => {
  return (
    <>
      {loading && (
        <div className="bg-primary-400 bg-[url('./assets/bg-valleta.svg')] bg-cover bg-no-repeat  bg-bottom bg-transparent">
          <div className="container">
            <div className="h-[220px] sm:h-[250px] xl:h-80 2xl:h-[500px]">
              <div
                role="status"
                className=" animate-pulse  rtl:space-x-reverse md:flex  justify-center flex-wrap  gap-3  "
              >
                <div className="flex rounded-3xl items-center justify-center w-full h-48 bg-gray-300   lg:w-[48%] dark:bg-gray-700 gap-3">
                  <svg
                    className="w-10 h-10  text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                  </svg>
                </div>
                <div className="lg:flex items-center justify-center w-full h-48 bg-gray-300 rounded-3xl sm:w-[48%] dark:bg-gray-700 gap-3  hidden">
                  <svg
                    className="w-10 h-10  text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                  </svg>
                </div>
                <div className="lg:flex items-center justify-center w-full h-48 bg-gray-300 rounded-3xl sm:w-[48%] dark:bg-gray-700 gap-3  hidden">
                  <svg
                    className="w-10 h-10  text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                  </svg>
                </div>
                <div className="lg:flex items-center justify-center w-full h-48 bg-gray-300 rounded-3xl sm:w-[48%] dark:bg-gray-700 gap-3  hidden">
                  <svg
                    className="w-10 h-10  text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                  </svg>
                </div>

                <span className="sr-only">Loading...</span>
              </div>
            </div>
            <div className="loadmore-btn "></div>
          </div>
        </div>
      )}
      {imagesArray && !loading && (
        <div className="bg-primary-400 bg-[url('./assets/bg-valleta.svg')] bg-contain bg-no-repeat  bg-bottom bg-transparent">
          <div className="container">
            <div className="h-[400px] sm:h-[450px] xl:h-80 2xl:h-[600px]">
              <Swiper
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                slidesPerView={2}
                grid={{
                  rows: 2,
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    pagination: {
                      dynamicBullets: true,
                      enabled: true,
                    },
                    grid: {
                      rows: 1,
                    },
                  },
                  767: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    grid: {
                      rows: 1,
                    },
                  },
                  992: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                    pagination: false,
                  },
                }}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                navigation={true}
                modules={[Autoplay, Grid, Pagination, Navigation]}
                className="mySwiper"
              >
                {imagesArray.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      className="h-full w-full object-cover rounded-3xl"
                      src={image.src}
                      alt={image.alt}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="loadmore-btn "></div>
          </div>
        </div>
      )}
    </>
  );
};

export default BannerSlider;

BannerSlider.propTypes = {
  imagesArray: PropsTypes.array,
  loading: PropsTypes.bool,
};
