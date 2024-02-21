import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Grid, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";

const Slider = () => {
  const ImagesArray = [
    {
      src: "https://dummyimage.com/600x400/000/fff",
      alt: "",
    },
    {
      src: "https://dummyimage.com/600x400/000/fff",
      alt: "",
    },
    {
      src: "https://dummyimage.com/600x400/000/fff",
      alt: "",
    },
    {
      src: "https://dummyimage.com/600x400/000/fff",
      alt: "",
    },
    {
      src: "https://dummyimage.com/600x400/000/fff",
      alt: "",
    },
    {
      src: "https://dummyimage.com/600x400/000/fff",
      alt: "",
    },
    {
      src: "https://dummyimage.com/600x400/000/fff",
      alt: "",
    },
    {
      src: "https://dummyimage.com/600x400/000/fff",
      alt: "",
    },
    {
      src: "https://dummyimage.com/600x400/000/fff",
      alt: "",
    },
  ];
  return (
    <>
      <div className="bg-primary-400 bg-[url('./assets/bg-valleta.svg')] bg-contain bg-no-repeat bg-contain bg-bottom bg-transparent">
        <div className="container ">
          <div className="h-56 sm:h-64 xl:h-80 2xl:h-[600px]">
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
                640: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1024: {
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
              {ImagesArray.map((image, index) => (
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

export default Slider;
