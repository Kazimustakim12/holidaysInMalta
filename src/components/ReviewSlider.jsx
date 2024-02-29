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
import PropsTypes from "prop-types";
import { convertDateToDays } from "../utils/dataToDays";

const ReviewSlider = ({ reviewList }) => {
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
            {reviewList.list.map((item, index) => {
              return (
                <SwiperSlide key={index + item.id}>
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
                          {item.user.name}
                        </h3>
                        <p className="text-base text-gray-700 font-normal">
                          {item.location}
                        </p>
                      </div>
                    </div>
                    <div className="flex  items-center mt-4">
                      <StarRate totalStars={3} />
                      <div className="ml-2">
                        <p className="text-xs text-gray-700 font-normal">
                          {convertDateToDays(item.date)}
                        </p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <ReadMore text={item.comment} maxLength={250} />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
            {/* {ImagesArray.map((image, index) => (
              
            ))} */}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ReviewSlider;

ReviewSlider.propTypes = {
  reviewList: PropsTypes.shape({
    count: PropsTypes.number,
    list: PropsTypes.arrayOf(
      PropsTypes.shape({
        id: PropsTypes.number,
        user: PropsTypes.shape({
          name: PropsTypes.string.isRequired,
        }),
        rating: PropsTypes.number,
        comment: PropsTypes.string,
        createdAt: PropsTypes.string,
        location: PropsTypes.string,
      })
    ),
  }),
};
