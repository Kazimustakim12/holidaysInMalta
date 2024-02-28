import { useState } from "react";
import PropTypes from "prop-types";

import { Modal } from "flowbite-react";
import { Button, Dropdown } from "flowbite-react";
import {
  AirbnbIcon,
  LeftSideArrowIcon,
  MapPinIcon,
  RightSideArrowIcon,
  TripAdvisor,
} from "./IconSvg";
import { getIconComponentByName } from "../utils/icons-map";

const FloatContainer = ({ currentData, prevDataFn, nextDataFn }) => {
  const [offerModal, setOfferModal] = useState(false);
  const {
    title,
    bookPlatforms,
    features,
    licenseNumber,
    offers,
    imagesArray = [],
  } = currentData;
  return (
    <>
      <div className="w-full ">
        <div className="flex lg:flex-nowrap md:flex-wrap flex-wrap gap-3  justify-center">
          <div className="lg:w-1/6 md:w-1/4 sm:w-1/3 xs:w-1/3 w-32 flex">
            <div className="relative flex items-center ">
              <img
                src={imagesArray[0].src}
                className="border-white border-4 rounded-l-[50px] rounded-r-[10px]  w-full object-contain"
                alt="prev-image"
              />
              <Button
                onClick={prevDataFn}
                className="rounded-l-[50px] rounded-r-[10px] flex items-center justify-center sm:px-2 sm:py-2  hover:border-secondary-500 hover:border bg-secondary-500 hover:text-secondary-400  hover:bg-secondary-600 enabled:hover:bg-secondary-600 absolute sm:left-[-25px] -left-2.5 focus:ring-secondary-400"
              >
                <span>
                  <LeftSideArrowIcon className="group-hover:fill-secondary-400 fill-white" />
                </span>
                <span className="text-white font-bold sm:text-2xl text-base ml-2 group-hover:text-secondary-400">
                  Prev
                </span>
              </Button>
            </div>
          </div>
          <div className="lg:w-2/3 md:w-full sm:w-full xs:w-full relative items-center bg-white sm:p-6 p-4 h-100 rounded-[15px] lg:order1 order-2">
            <div className="flex flex-col item-center gap-2 xl:flex-row lg:flex-col md:flex-col sm:flex-col xs:flex-col">
              <div className="w-full xl:w-2/3 lg:w-full flex   gap-1 ">
                <div>
                  <MapPinIcon className="w-8" />
                </div>
                <div className="w-full">
                  <h3 className="text-black text-2xl sm:text-3xl font-bold">
                    {title}
                  </h3>
                  <span className="text-primary-600 text-sm fill-primary-600">
                    Comfort Class Holiday Premises license by MTA with license
                    number <strong>{licenseNumber}</strong>.
                  </span>
                  <ul className="list-none flex flex-wrap items-center gap-2">
                    {features.map((item, index) => {
                      return (
                        <li
                          key={item.name + index}
                          className="flex items-center gap-1"
                        >
                          {getIconComponentByName(
                            item.icon,
                            "fill-primary-600"
                          )}
                          <span></span>
                          <span className="text-slate-500 text-lg">
                            <span className="text-black font-normal mr-1">
                              {item.value}
                            </span>
                            {item.name}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="xl:w-1/3 lg:w-full md:w-full sm:w-full xs:w-full ">
                <Dropdown
                  className=" bg-white rounded-2xl p-3 enabled:hover:text-primary-600 xl:w-auto lg:w-full"
                  label="Book In"
                  renderTrigger={() => (
                    <Button
                      pill
                      className="w-full px-3 bg-primary-600 hover:bg-primary-500 hover:border focus:ring-primary-600 hover:border-primary-600 transition-all enabled:hover:bg-primary-500 enabled:hover:text-primary-600 "
                    >
                      <span className=" text-2xl font-blinker font-bold flex items-center">
                        BOOK IN
                        <RightSideArrowIcon className="ml-3 transform rotate-90 fill-white group-hover:fill-primary-600" />
                      </span>
                    </Button>
                  )}
                >
                  {bookPlatforms.map(() => {})}
                  <Dropdown.Item
                    onClick={() => alert("Dashboard!")}
                    className="px-5 py-2 border border-primary-600 rounded-3xl hover:bg-primary-300 text-lg font-bold text-primary-600"
                  >
                    <AirbnbIcon className="fill-primary-600 mr-2 w-8" />
                    Airbnb
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => alert("Dashboard!")}
                    className="px-5 py-2 border border-primary-600 rounded-3xl hover:bg-primary-300 text-lg font-bold text-primary-600 mt-2"
                  >
                    <TripAdvisor className="fill-primary-600 mr-2 w-8" />
                    TripAdvisor
                  </Dropdown.Item>
                </Dropdown>
                {/* <Button
                  pill
                  className="w-full p-3 bg-primary-600 hover:bg-primary-500 enabled:hover:bg-primary-500 enabled:hover:text-primary-600 text-2xl"
                >
                  
                </Button> */}
              </div>
            </div>
            <div className="border-solid border-t border-slate-200 mt-2 py-4">
              <div className="flex flex-col items-start  gap-3 2xl:flex-row 2xl:items-center lg:flex-col lg:items-start  md:flex-col md:items-start">
                <span className="text-black font-normal text-base 2xl:text-sm">
                  This place offers:
                </span>
                <ul className="flex gap-2 items-center flex-wrap">
                  {offers?.available?.slice(0, 5).map((item, index) => {
                    return (
                      <li
                        key={item.name + index}
                        className="border border-solid text-sm border-light-gray-100 py-2 px-2 flex justify-between text-black rounded-md  text-sm"
                      >
                        <img
                          src="/assets/cbi_kitchen-alt.svg"
                          className="w-6 h-6 mr-2"
                          alt="kitchen-icon"
                        />
                        kitchen
                      </li>
                    );
                  })}

                  <li
                    onClick={() => setOfferModal(true)}
                    className="border border-solid text-sm border-primary-600 py-2 px-3 flex justify-between text-black rounded-md text-sm"
                  >
                    {`See All >`}
                  </li>
                  <Modal
                    position="center"
                    show={offerModal}
                    size="md"
                    className=""
                    popup
                    onClose={() => setOfferModal(false)}
                  >
                    <Modal.Header />
                    <Modal.Body className="p-4 sm:p-6">
                      <div className="">
                        <p className="mb-2 font-semibold text-xl">
                          This Place Offers:
                        </p>
                        <ul className="flex gap-2 items-center flex-wrap">
                          <li className="border border-solid text-sm border-light-gray-100 py-2 px-2 flex justify-between text-black rounded-md  text-sm">
                            <img
                              src="/assets/cbi_kitchen-alt.svg"
                              className="w-6 h-6 mr-2"
                              alt="kitchen-icon"
                            />
                            kitchen
                          </li>
                          <li className="border border-solid text-sm border-light-gray-100 py-2 px-2 flex justify-between text-black rounded-md text-sm">
                            <img
                              src="/assets/streamline_wifi.svg"
                              className="w-6 h-6 mr-2"
                              alt="kitchen-icon"
                            />
                            wifi
                          </li>
                          <li className="border border-solid text-sm border-light-gray-100 py-2 px-2 flex justify-between text-black rounded-md text-sm">
                            <img
                              src="/assets/mingcute_swimming-pool-line.svg"
                              className="w-6 h-6 mr-2"
                              alt="kitchen-icon"
                            />
                            Pool
                          </li>
                          <li className="border border-solid text-sm border-light-gray-100 py-2 px-2 flex justify-between text-black rounded-md text-sm">
                            <img
                              src="/assets/cbi_kitchen-alt.svg"
                              className="w-6 h-6 mr-2"
                              alt="kitchen-icon"
                            />
                            TV
                          </li>
                          <li className="border border-solid text-sm border-light-gray-100 py-2 px-2 flex justify-between text-black rounded-md text-sm">
                            <img
                              src="/assets/fluent_washer-32-regular.svg "
                              className="w-6 h-6 mr-2"
                              alt="kitchen-icon"
                            />
                            Washer
                          </li>
                          <li className="border border-solid text-sm border-light-gray-100 py-2 px-2 flex justify-between text-black rounded-md text-sm">
                            <img
                              src="/assets/tabler_air-conditioning.svg"
                              className="w-6 h-6 mr-2"
                              alt="kitchen-icon"
                            />
                            Air conditioning
                          </li>
                        </ul>
                      </div>
                    </Modal.Body>
                  </Modal>
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:w-1/6 md:w-1/4 sm:w-1/3 xs:w-1/3 w-32  flex lg:order-2 order-1">
            <div className="relative flex items-center ">
              <img
                src={imagesArray[imagesArray.length - 1].src}
                className="border-white border-4 rounded-r-[50px] rounded-l-[10px]  w-full object-contain"
                alt="prev-image"
              />
              <Button
                onClick={nextDataFn}
                className="rounded-r-[50px] rounded-l-[10px] flex items-center justify-center focus:ring-primary-600 sm:px-2 sm:py-2 hover:border hover:border-primary-600 hover:text-primary-600 bg-primary-600 hover:bg-primary-500 enabled:hover:bg-primary-500 absolute sm:right-[-25px] -right-2.5"
              >
                <span className="text-white font-bold sm:text-2xl text-base ml-2 group-hover:text-primary-600">
                  Next
                </span>
                <span>
                  <RightSideArrowIcon className="group-hover:fill-primary-600 fill-white" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatContainer;

FloatContainer.propTypes = {
  currentData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    bookPlatforms: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
      })
    ).isRequired,
    features: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
      })
    ).isRequired,
    licenseNumber: PropTypes.string.isRequired,
    offers: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
      })
    ).isRequired,
    imagesArray: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
  prevDataFn: PropTypes.func.isRequired,
  nextDataFn: PropTypes.func.isRequired,
};
