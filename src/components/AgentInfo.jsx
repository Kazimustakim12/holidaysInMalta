import { CellPhoneIcon, WhatsApp } from "./IconSvg";
import PropsTypes from "prop-types";

const AgentInfo = ({ agentDetails, loading }) => {
  return (
    <>
      {loading && (
        <>
          <div role="status" className="p-4 rounded-3xl bg-white ">
            <div className="flex items-center animate-pulse ">
              <div className="flex items-center mt-4">
                <svg
                  className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
                <div>
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                  <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </div>
              </div>
              <div className="info ml-4">
                <h3 className="text-primary-600 font-bold leading-[normal] text-2xl"></h3>
                <div className="flex flex-col"></div>
              </div>
            </div>
            <div className="cta-btn flex  gap-2 mt-4"></div>
          </div>
        </>
      )}
      {!loading &&
        agentDetails &&
        agentDetails.map((item, index) => {
          return (
            <div className="p-4 rounded-3xl bg-white " key={item.name + index}>
              <div className="flex items-center">
                <div className="">
                  <img src="/assets/slaeperson.png" alt="agent-img" />
                </div>
                <div className="info ml-4">
                  <h3 className="text-primary-600 font-bold leading-[normal] text-2xl">
                    {item.name}
                  </h3>
                  <div className="flex flex-col">
                    <a
                      href={`tel:${item.number}`}
                      className="text-sm pt-2 font-bold hover:text-primary-600 cursor-pointer "
                    >
                      {item.number}
                    </a>
                    <a
                      href={`mailto:${item.email}`}
                      className="text-sm pt-2 font-normal hover:text-primary-600 cursor-pointer "
                    >
                      {item.email}
                    </a>
                  </div>
                </div>
              </div>
              <div className="cta-btn flex md:flex-row xs:flex-row flex-col  gap-2 mt-4">
                <a
                  href={`tel:${item.number}`}
                  className="w-full bg-primary-600 py-3 px-4 transition-all border border-transparent text-white flex items-center justify-center  rounded-xl cursor-pointer enabled:hover:bg-primary-500 hover:text-primary-600 group hover:bg-primary-500 hover:border hover:border-primary-600  font-bold text-sm"
                >
                  <CellPhoneIcon className="fill-white mr-3 group-hover:fill-primary-600" />
                  Call me
                </a>
                <a
                  href={`https://api.whatsapp.com/send?phone=${item.whatsappNumber}`}
                  size="md"
                  className="w-full text-white py-3 px-4 flex items-center border border-transparent justify-center text-sm rounded-xl cursor-pointer bg-sucess-600 enabled:hover:bg-green-500 hover:text-white group hover:bg-green-500 hover:border hover:border-green-600  font-bold "
                >
                  <WhatsApp className="fill-white mr-3 group-hover:fill-white-600" />
                  WhatsApp me
                </a>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default AgentInfo;

AgentInfo.propTypes = {
  agentDetails: PropsTypes.arrayOf(
    PropsTypes.shape({
      avatar: PropsTypes.string.isRequired,
      name: PropsTypes.string.isRequired,
      number: PropsTypes.string.isRequired,
      email: PropsTypes.string.isRequired,
      whatsappNumber: PropsTypes.string.isRequired,
    })
  ),
  loading: PropsTypes.bool,
};
