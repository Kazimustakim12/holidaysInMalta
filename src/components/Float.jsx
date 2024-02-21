import { Button } from "flowbite-react";

const Float = () => {
  return (
    <>
      <div className="w-full   absolute mt-[-80px] z-10">
        <div className="flex  gap-3">
          <div className="w-1/6 flex">
            <div className="relative flex items-center ">
              <img
                src="/assets/property-img/Phse-1.jpg"
                className="border-white border-4 rounded-l-[50px] rounded-r-[10px]  w-full object-contain"
                alt="prev-image"
              />
              <Button className="rounded-l-[50px] rounded-r-[10px] flex items-center justify-center p-5 w-2/4 bg-secondary-500 hover:text-secondary-600  hover:bg-secondary-600 enabled:hover:bg-secondary-600 absolute left-[-35px]">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    fill="none"
                  >
                    <path
                      className="group-hover:fill-secondary-500"
                      d="M17.686 2.41405C17.9542 2.6823 18.1048 3.04607 18.1048 3.42538C18.1048 3.80468 17.9542 4.16845 17.686 4.4367L10.6053 11.5174L17.686 18.5981C17.9466 18.8679 18.0907 19.2292 18.0875 19.6043C18.0842 19.9793 17.9338 20.3381 17.6686 20.6033C17.4034 20.8685 17.0446 21.019 16.6695 21.0222C16.2945 21.0255 15.9331 20.8813 15.6634 20.6207L7.57134 12.5287C7.30317 12.2605 7.15253 11.8967 7.15253 11.5174C7.15253 11.1381 7.30317 10.7743 7.57134 10.5061L15.6634 2.41405C15.9316 2.14589 16.2954 1.99524 16.6747 1.99524C17.054 1.99524 17.4178 2.14589 17.686 2.41405Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <span className="text-white font-bold text-2xl ml-2 group-hover:text-secondary-500">
                  Prev
                </span>
                <div className=""></div>
              </Button>
            </div>
          </div>
          <div className="w-2/3 relative items-center bg-white p-6 h-100 rounded-[15px]">
            <div className="flex item-center gap-2">
              <div className="w-2/3 flex items-center gap-3 ">
                <div>
                  <img
                    className="w-20"
                    src="/assets/eva_pin-outline.svg"
                    alt=""
                  />
                </div>
                <div className="w-full">
                  <h3 className="text-black text-3xl font-bold">{`Entire rental unit in Ta'Xbiex, Malta`}</h3>
                  <span className="text-primary-600 text-sm">
                    Comfort Class Holiday Premises license by MTA with license
                    number <strong>APT-27101</strong>.
                  </span>
                  <ul className="list-none flex items-center gap-2">
                    <li className="flex items-center gap-1">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                        >
                          <path
                            d="M6.41667 15.5834V16.5C6.41667 17.05 6.78334 17.4167 7.33334 17.4167H14.6667C15.2167 17.4167 15.5833 17.05 15.5833 16.5V15.5834C15.5833 14.854 15.2936 14.1546 14.7779 13.6388C14.2622 13.1231 13.5627 12.8334 12.8333 12.8334H9.16667C8.43733 12.8334 7.73785 13.1231 7.22213 13.6388C6.7064 14.1546 6.41667 14.854 6.41667 15.5834ZM13.75 7.33337C13.75 8.06272 13.4603 8.76219 12.9445 9.27792C12.4288 9.79364 11.7294 10.0834 11 10.0834C10.2707 10.0834 9.57119 9.79364 9.05546 9.27792C8.53974 8.76219 8.25001 8.06272 8.25001 7.33337C8.25001 6.60403 8.53974 5.90456 9.05546 5.38883C9.57119 4.87311 10.2707 4.58337 11 4.58337C11.7294 4.58337 12.4288 4.87311 12.9445 5.38883C13.4603 5.90456 13.75 6.60403 13.75 7.33337Z"
                            stroke="#F24E1E"
                            stroke-width="1.83333"
                          />
                        </svg>
                      </span>
                      <span className="text-slate-500 text-lg">
                        <span className="text-black font-normal mr-1">6</span>
                        guests
                      </span>
                    </li>
                    <li className="flex items-center gap-1 ">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                        >
                          <path
                            d="M2.75 19.25V17.4167H4.58333V2.75H13.75V3.66667H17.4167V17.4167H19.25V19.25H15.5833V5.5H13.75V19.25H2.75ZM10.0833 11.9167C10.3431 11.9167 10.5609 11.8287 10.7369 11.6527C10.9129 11.4767 11.0006 11.2591 11 11C11 10.7403 10.912 10.5227 10.736 10.3473C10.56 10.1719 10.3424 10.0839 10.0833 10.0833C9.82361 10.0833 9.60606 10.1713 9.43067 10.3473C9.25528 10.5233 9.16728 10.7409 9.16667 11C9.16667 11.2597 9.25467 11.4776 9.43067 11.6536C9.60667 11.8296 9.82422 11.9173 10.0833 11.9167ZM6.41667 17.4167H11.9167V4.58333H6.41667V17.4167Z"
                            fill="#F24E1E"
                          />
                        </svg>
                      </span>
                      <span className="text-slate-500 text-lg">
                        <span className="text-black font-normal mr-1">3</span>
                        bedrooms
                      </span>
                    </li>
                    <li className="flex items-center gap-1">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                        >
                          <path
                            d="M17.875 5.84375H2.40625V4.125C2.40625 3.8515 2.2976 3.58919 2.1042 3.3958C1.91081 3.2024 1.6485 3.09375 1.375 3.09375C1.1015 3.09375 0.839193 3.2024 0.645796 3.3958C0.452399 3.58919 0.34375 3.8515 0.34375 4.125V17.875C0.34375 18.1485 0.452399 18.4108 0.645796 18.6042C0.839193 18.7976 1.1015 18.9062 1.375 18.9062C1.6485 18.9062 1.91081 18.7976 2.1042 18.6042C2.2976 18.4108 2.40625 18.1485 2.40625 17.875V15.4688H19.5938V17.875C19.5938 18.1485 19.7024 18.4108 19.8958 18.6042C20.0892 18.7976 20.3515 18.9062 20.625 18.9062C20.8985 18.9062 21.1608 18.7976 21.3542 18.6042C21.5476 18.4108 21.6562 18.1485 21.6562 17.875V9.625C21.6551 8.6225 21.2564 7.66138 20.5475 6.95251C19.8386 6.24363 18.8775 5.84489 17.875 5.84375ZM7.90625 13.4062H2.40625V7.90625H7.90625V13.4062ZM19.5938 13.4062H9.96875V7.90625H17.875C18.3308 7.90625 18.768 8.08733 19.0903 8.40966C19.4127 8.73199 19.5938 9.16916 19.5938 9.625V13.4062Z"
                            fill="#F24E1E"
                          />
                        </svg>
                      </span>
                      <span className="text-slate-500 text-lg">
                        <span className="text-black font-normal mr-1">4</span>
                        beds
                      </span>
                    </li>
                    <li className="flex items-center gap-1">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                        >
                          <path
                            d="M20.1667 11H4.58333V5.8758C4.58011 5.54566 4.66722 5.22092 4.83525 4.93672C5.00329 4.65252 5.24584 4.41968 5.53666 4.26339C5.85846 4.08944 6.22503 4.016 6.589 4.05255C6.40372 4.61349 6.37734 5.21476 6.51276 5.78977C6.64818 6.36478 6.94012 6.89109 7.35625 7.31039L8.32791 8.28205C8.41305 8.36728 8.51415 8.4349 8.62543 8.48103C8.73671 8.52716 8.85599 8.5509 8.97646 8.5509C9.09692 8.5509 9.2162 8.52716 9.32749 8.48103C9.43877 8.4349 9.53986 8.36728 9.625 8.28205L12.8654 5.04164C13.0373 4.86974 13.1338 4.63662 13.1338 4.39356C13.1338 4.15049 13.0373 3.91737 12.8654 3.74547L11.8937 2.7738C11.3527 2.23502 10.637 1.90725 9.87557 1.8496C9.11419 1.79195 8.35726 2.00821 7.74125 2.45939C7.18592 2.24237 6.58598 2.16434 5.99361 2.23207C5.40125 2.2998 4.83441 2.51125 4.3424 2.84802C3.85039 3.18479 3.44813 3.63668 3.1706 4.16437C2.89307 4.69207 2.74868 5.27958 2.75 5.8758V11H1.83333C1.59022 11 1.35706 11.0965 1.18515 11.2685C1.01324 11.4404 0.916664 11.6735 0.916664 11.9166C0.916664 12.1598 1.01324 12.3929 1.18515 12.5648C1.35706 12.7367 1.59022 12.8333 1.83333 12.8333H2.75V15.5833C2.75168 16.1502 2.92882 16.7027 3.25708 17.1649C3.58534 17.6271 4.04863 17.9763 4.58333 18.1646V19.25C4.58333 19.4931 4.67991 19.7262 4.85182 19.8982C5.02373 20.0701 5.25688 20.1666 5.5 20.1666C5.74311 20.1666 5.97627 20.0701 6.14818 19.8982C6.32009 19.7262 6.41666 19.4931 6.41666 19.25V18.3333H15.5833V19.25C15.5833 19.4931 15.6799 19.7262 15.8518 19.8982C16.0237 20.0701 16.2569 20.1666 16.5 20.1666C16.7431 20.1666 16.9763 20.0701 17.1482 19.8982C17.3201 19.7262 17.4167 19.4931 17.4167 19.25V18.1646C17.9514 17.9763 18.4147 17.6271 18.7429 17.1649C19.0712 16.7027 19.2483 16.1502 19.25 15.5833V12.8333H20.1667C20.4098 12.8333 20.6429 12.7367 20.8148 12.5648C20.9868 12.3929 21.0833 12.1598 21.0833 11.9166C21.0833 11.6735 20.9868 11.4404 20.8148 11.2685C20.6429 11.0965 20.4098 11 20.1667 11ZM8.65333 4.06997C8.91138 3.81293 9.26077 3.6686 9.625 3.6686C9.98923 3.6686 10.3386 3.81293 10.5967 4.06997L10.9212 4.39356L8.97692 6.3378L8.65241 6.01422C8.39459 5.75621 8.24975 5.40639 8.24975 5.04164C8.24975 4.67689 8.39459 4.32706 8.65241 4.06906L8.65333 4.06997ZM17.4167 15.5833C17.4167 15.8264 17.3201 16.0596 17.1482 16.2315C16.9763 16.4034 16.7431 16.5 16.5 16.5H5.5C5.25688 16.5 5.02373 16.4034 4.85182 16.2315C4.67991 16.0596 4.58333 15.8264 4.58333 15.5833V12.8333H17.4167V15.5833Z"
                            fill="#F24E1E"
                          />
                        </svg>
                      </span>
                      <span className="text-slate-500 text-lg">
                        <span className="text-black font-normal mr-1">2</span>
                        baths
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-1/3">
                <Button
                  pill
                  className="w-full p-3 bg-primary-600 hover:bg-primary-500 enabled:hover:bg-primary-500 enabled:hover:text-primary-600 text-2xl"
                >
                  <span className="text-2xl font-bold font-blinker flex items-center">
                    <img
                      src="/assets/mingcute_airbnb-line.svg"
                      alt=""
                      className="mr-2"
                    />
                    BOOK IN AIRBNB
                  </span>
                </Button>
              </div>
            </div>
            <div className="border-solid border-t border-slate-50 mt-2 py-3">
              <div className="flex items-center gap-3">
                <span className="text-black font-normal text-lg">
                  This place offers:
                </span>
                <ul className="flex gap-2 items-center">
                  <li className="border border-solid text-sm border-light-gray-100 py-2 px-2 flex justify-between text-black rounded-md">
                    <img
                      src="/assets/cbi_kitchen-alt.svg"
                      className="w-6 h-6 mr-2"
                      alt="kitchen-icon"
                    />
                    kitchen
                  </li>
                  <li className="border border-solid text-sm border-light-gray-100 py-2 px-2 flex justify-between text-black rounded-md">
                    <img
                      src="/assets/streamline_wifi.svg"
                      className="w-6 h-6 mr-2"
                      alt="kitchen-icon"
                    />
                    wifi
                  </li>
                  <li className="border border-solid text-sm border-light-gray-100 py-2 px-2 flex justify-between text-black rounded-md">
                    <img
                      src="/assets/mingcute_swimming-pool-line.svg"
                      className="w-6 h-6 mr-2"
                      alt="kitchen-icon"
                    />
                    Pool
                  </li>
                  <li className="border border-solid text-sm border-light-gray-100 py-2 px-2 flex justify-between text-black rounded-md">
                    <img
                      src="/assets/cbi_kitchen-alt.svg"
                      className="w-6 h-6 mr-2"
                      alt="kitchen-icon"
                    />
                    TV
                  </li>
                  <li className="border border-solid text-sm border-light-gray-100 py-2 px-2 flex justify-between text-black rounded-md">
                    <img
                      src="/assets/fluent_washer-32-regular.svg "
                      className="w-6 h-6 mr-2"
                      alt="kitchen-icon"
                    />
                    Washer
                  </li>
                  <li className="border border-solid text-sm border-light-gray-100 py-2 px-2 flex justify-between text-black rounded-md">
                    <img
                      src="/assets/tabler_air-conditioning.svg"
                      className="w-6 h-6 mr-2"
                      alt="kitchen-icon"
                    />
                    Air conditioning
                  </li>
                  <li className="border border-solid text-sm border-primary-600 py-2 px-3 flex justify-between text-black rounded-md">
                    {`See All >`}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-1/6 flex">
            <div className="relative flex items-center ">
              <img
                src="/assets/property-img/Phse-1.jpg"
                className="border-white border-4 rounded-r-[50px] rounded-l-[10px]  w-full object-contain"
                alt="prev-image"
              />
              <Button className="rounded-r-[50px] rounded-l-[10px] flex items-center justify-center px-6 py-5 w-2/4 hover:text-primary-600 bg-primary-600 hover:bg-primary-500 enabled:hover:bg-primary-500 absolute right-[-35px]">
                <span className="text-white font-bold text-2xl ml-2 group-hover:text-primary-600">
                  Next
                </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                  >
                    <path
                      className="group-hover:fill-primary-600"
                      d="M8.24875 20.6034C7.98059 20.3352 7.82994 19.9714 7.82994 19.5921C7.82994 19.2128 7.98059 18.849 8.24875 18.5808L15.3294 11.5001L8.24875 4.41937C7.98819 4.14959 7.84401 3.78825 7.84726 3.4132C7.85052 3.03814 8.00096 2.67936 8.26618 2.41415C8.53139 2.14893 8.89017 1.9985 9.26522 1.99524C9.64028 1.99198 10.0016 2.13616 10.2714 2.39673L18.3634 10.4887C18.6316 10.757 18.7822 11.1208 18.7822 11.5001C18.7822 11.8794 18.6316 12.2431 18.3634 12.5114L10.2714 20.6034C10.0031 20.8716 9.63938 21.0222 9.26007 21.0222C8.88077 21.0222 8.517 20.8716 8.24875 20.6034Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Float;
