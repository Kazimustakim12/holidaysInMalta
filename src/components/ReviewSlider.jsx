import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Grid, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { StarRate } from "./ReviewStart";
import { ReadMore } from "./ReadMoreTruncate";

const ReviewSlider = () => {
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
      <div>
        <h1 className="text-primary-500 font-blinker font-bold text-3xl mb-4 mt-4 ">
          Reviews:
        </h1>
        <div className="rounded-3xl  ">
          <Swiper
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            slidesPerView={2}
            pagination={{
              dynamicBullets: true,
            }}
            grid={{
              rows: 1,
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
              },
            }}
            spaceBetween={10}
            navigation={false}
            modules={[Autoplay, Grid, Pagination, Navigation]}
            // className="mySwiper"
          >
            {ImagesArray.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="p-6 rounded-3xl bg-white h-full ">
                  <div className="flex items-center">
                    <div className="w-14 h-14 rounded-full overflow-hidden">
                      <img
                        src="/assets/review-user-1.webp"
                        alt="user-img"
                        className="w-full object-cover h-full"
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-base text-black font-semibold">
                        Moneish
                      </h3>
                      <p className="text-base text-gray-700 font-normal">
                        The Hague, Netherland
                      </p>
                    </div>
                  </div>
                  <div className="flex  items-center mt-4">
                    <StarRate totalStars={3} />
                    <div className="ml-2">
                      <p className="text-xs text-gray-700 font-normal">
                        4 days ago - stay a few nights
                      </p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <ReadMore
                      text={`The good - Mirko was great, super responsive and very
                      helpful, quick to assist and respond where needed and
                      generally just a nice guy. Location is good above
                      supermarket, great view`}
                      maxLength={150}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ReviewSlider;
