import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Grid, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";

const BannerSlider = ({ imagesArray = [] }) => {
  return (
    <>
      <div className="bg-primary-400 bg-[url('./assets/bg-valleta.svg')] bg-contain bg-no-repeat bg-contain bg-bottom bg-transparent">
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
    </>
  );
};

export default BannerSlider;
